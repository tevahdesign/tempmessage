
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const faqItems: FAQItem[] = [
    {
      question: 'What is a temporary email service?',
      answer: 'A temporary email service provides you with a disposable email address that you can use for a short period of time. This helps protect your privacy by keeping your personal email address private when signing up for services online.'
    },
    {
      question: 'How long does the temporary email address last?',
      answer: 'Our temporary email addresses last for up to one hour from generation. After this period, the email address and all received messages are permanently deleted.'
    },
    {
      question: 'Is this service completely free?',
      answer: 'Yes, our temporary email service is 100% free to use. There are no hidden fees or premium features that require payment.'
    },
    {
      question: 'Can I send emails with this service?',
      answer: 'No, this service only allows you to receive emails. The temporary email addresses cannot be used to send outgoing emails.'
    },
    {
      question: 'Is it legal to use temporary email addresses?',
      answer: 'Yes, using temporary email addresses is completely legal. However, some websites may block or disallow the use of temporary email addresses for their services.'
    }
  ];
  
  return (
    <div className="py-12 bg-app-dark" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-300">
            Have questions about our temporary email service? We've got answers.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-app-darker border border-app-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 py-5 sm:p-6 text-left flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
