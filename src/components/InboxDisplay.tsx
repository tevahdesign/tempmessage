
import { Mail, RefreshCw, Trash2, Eye } from 'lucide-react';
import EmptyInboxImage from '../components/EmptyInboxImage';
import { useEmail } from '../contexts/EmailContext';
import { toast } from "sonner";
import { useState } from 'react';

export const InboxDisplay = () => {
  const { emails, checkEmails, deleteEmail, readEmail, activeEmail, loading } = useEmail();
  const [refreshing, setRefreshing] = useState(false);
  const [showEmailContent, setShowEmailContent] = useState(false);
  
  const handleRefresh = async () => {
    if (loading || refreshing) return;
    
    setRefreshing(true);
    try {
      await checkEmails();
      toast.success("Inbox refreshed");
    } catch (error) {
      toast.error("Failed to refresh inbox");
      console.error("Failed to refresh inbox:", error);
    } finally {
      setRefreshing(false);
    }
  };
  
  const handleDelete = (id: string) => {
    deleteEmail(id);
    // If the deleted email is currently viewed, close the view
    if (activeEmail && activeEmail.id === id) {
      setShowEmailContent(false);
    }
  };
  
  const handleReadEmail = async (id: string) => {
    try {
      await readEmail(id);
      setShowEmailContent(true);
    } catch (error) {
      toast.error("Failed to read email");
      console.error("Failed to read email:", error);
    }
  };
  
  const handleBack = () => {
    setShowEmailContent(false);
  };
  
  return (
    <div className="px-6 pb-10">
      <div className="bg-app-darker rounded-md border border-app-border overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-app-border">
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span className="font-medium">{showEmailContent ? 'Email Content' : 'Inbox'}</span>
          </div>
          {!showEmailContent && (
            <button 
              className="text-gray-400 hover:text-white"
              onClick={handleRefresh}
              disabled={loading || refreshing}
              aria-label="Refresh inbox"
            >
              <RefreshCw size={18} className={loading || refreshing ? "animate-spin" : ""} />
            </button>
          )}
          {showEmailContent && (
            <button 
              className="text-gray-400 hover:text-white"
              onClick={handleBack}
              aria-label="Back to inbox"
            >
              Back
            </button>
          )}
        </div>
        
        <div className="min-h-[300px] max-h-[500px] overflow-y-auto">
          {!showEmailContent ? (
            emails.length > 0 ? (
              <div className="w-full divide-y divide-app-border">
                {emails.map((email) => (
                  <div 
                    key={email.id} 
                    className="p-4 hover:bg-app-dark cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-medium text-white">{email.from}</div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-gray-400">{email.date}</div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadEmail(email.id);
                          }}
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                          aria-label="View email"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(email.id);
                          }}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Delete email"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1 text-gray-300 font-medium">{email.subject}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <EmptyInboxImage />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Your inbox is empty</h3>
                  <p className="text-gray-400">Waiting for incoming emails</p>
                </div>
              </div>
            )
          ) : activeEmail ? (
            <div className="p-6">
              <div className="mb-4 border-b border-app-border pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{activeEmail.subject}</h3>
                    <p className="text-gray-300">From: {activeEmail.from}</p>
                    <p className="text-gray-400 text-sm">{activeEmail.date}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(activeEmail.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Delete email"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="email-body text-gray-200 whitespace-pre-wrap" 
                dangerouslySetInnerHTML={{ __html: activeEmail.body || 'No content' }} />
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-400">Loading email content...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
