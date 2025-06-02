
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { toast } from "sonner";

// Define types for our email data
export type EmailAddress = {
  email_addr: string;
  sid_token: string;
};

export type Email = {
  id: string;
  from: string;
  subject: string;
  date: string;
  body?: string;
  read: boolean;
};

type EmailContextType = {
  emailAddress: EmailAddress | null;
  emails: Email[];
  loading: boolean;
  error: string | null;
  generateEmail: () => Promise<void>;
  checkEmails: () => Promise<void>;
  deleteEmail: (id: string) => void;
  readEmail: (id: string) => Promise<void>;
  activeEmail: Email | null;
  isPolling: boolean;
  copyToClipboard: () => void;
};

const EmailContext = createContext<EmailContextType | undefined>(undefined);

const BASE_URL = 'https://api.guerrillamail.com/ajax.php';

export const EmailProvider = ({ children }: { children: ReactNode }) => {
  const [emailAddress, setEmailAddress] = useState<EmailAddress | null>(null);
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isPolling, setIsPolling] = useState<boolean>(false);
  const [pollInterval, setPollInterval] = useState<number>(0);
  const [lastSeq, setLastSeq] = useState<number>(0);
  const [activeEmail, setActiveEmail] = useState<Email | null>(null);

  // Function to get a new email address
  const generateEmail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}?f=get_email_address`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch email address');
      }
      
      const data = await response.json();
      setEmailAddress(data);
      setEmails([]);
      setLastSeq(0); // Reset sequence for new email
      toast.success("New email address generated");
      
      // Start polling for emails
      if (!isPolling) {
        const interval = window.setInterval(() => {
          checkEmails();
        }, 15000); // Check every 15 seconds
        setPollInterval(interval as unknown as number);
        setIsPolling(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast.error("Failed to generate email address");
    } finally {
      setLoading(false);
    }
  };

  // Function to check for new emails
  const checkEmails = async () => {
    if (!emailAddress) return Promise.reject(new Error("No email address available"));
    
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?f=check_email&sid_token=${emailAddress.sid_token}&seq=${lastSeq}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to check emails');
      }
      
      const data = await response.json();
      
      // Update the last sequence number for pagination
      if (data.hasOwnProperty('seq')) {
        setLastSeq(data.seq);
      }
      
      if (data.list && data.list.length > 0) {
        // Filter out guerrillamail default system emails
        const filteredEmails = data.list.filter((email: any) => {
          return !email.mail_from.includes('@guerrillamail') && 
                 !email.mail_from.includes('support@guerrillamail') &&
                 !email.mail_from.includes('team@guerrillamail') &&
                 !email.mail_from.includes('noreply@guerrillamail');
        });
        
        if (filteredEmails.length > 0) {
          const newEmails: Email[] = filteredEmails.map((email: any) => ({
            id: email.mail_id,
            from: email.mail_from,
            subject: email.mail_subject || "(No Subject)",
            date: email.mail_date,
            read: false
          }));
          
          // Only update if we have new emails and filter out duplicates
          setEmails(prev => {
            const existingIds = new Set(prev.map(email => email.id));
            const uniqueNewEmails = newEmails.filter(email => !existingIds.has(email.id));
            
            if (uniqueNewEmails.length > 0) {
              toast.info(`${uniqueNewEmails.length} new email(s) received!`);
              return [...uniqueNewEmails, ...prev];
            }
            
            return prev;
          });
        }
      }
      
      return Promise.resolve();
    } catch (err) {
      console.error("Error checking emails:", err);
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete an email
  const deleteEmail = (id: string) => {
    setEmails(prev => prev.filter(email => email.id !== id));
    toast.success("Email deleted");
  };

  // Function to read email content
  const readEmail = async (id: string) => {
    if (!emailAddress) return Promise.reject(new Error("No email address available"));
    
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?f=fetch_email&sid_token=${emailAddress.sid_token}&email_id=${id}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch email content');
      }
      
      const data = await response.json();
      
      if (data && data.mail_id) {
        // Mark email as read in the list
        setEmails(prev => 
          prev.map(email => 
            email.id === id ? { ...email, read: true } : email
          )
        );
        
        // Set active email with content
        const emailWithBody = {
          id: data.mail_id,
          from: data.mail_from,
          subject: data.mail_subject || "(No Subject)",
          date: data.mail_date,
          body: data.mail_body,
          read: true
        };
        
        setActiveEmail(emailWithBody);
        return Promise.resolve();
      } else {
        throw new Error('Invalid email data received');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to read email';
      toast.error(errorMessage);
      console.error("Error reading email:", err);
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  // Copy email address to clipboard
  const copyToClipboard = () => {
    if (!emailAddress) return;
    
    navigator.clipboard.writeText(emailAddress.email_addr);
    toast.success("Email copied to clipboard");
  };

  // Clean up polling interval when component unmounts
  useEffect(() => {
    return () => {
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [pollInterval]);

  // Generate an email address on initial load
  useEffect(() => {
    generateEmail();
  }, []);

  const value = {
    emailAddress,
    emails,
    loading,
    error,
    generateEmail,
    checkEmails,
    deleteEmail,
    readEmail,
    activeEmail,
    isPolling,
    copyToClipboard
  };

  return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>;
};

// Custom hook to use the email context
export const useEmail = () => {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
