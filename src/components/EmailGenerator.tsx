
import { Copy, RefreshCw } from 'lucide-react';
import { useEmail } from '../contexts/EmailContext';

export const EmailGenerator = () => {
  const { emailAddress, generateEmail, copyToClipboard, loading } = useEmail();
  
  return (
    <div id="email-generator" className="px-6 py-6">
      <div className="dotted-border p-6 space-y-6">
        <h2 className="text-xl font-semibold text-white">Your Temporary Email Address</h2>
        
        <div className="bg-app-darker p-4 rounded-md flex items-center justify-between">
          <span className="text-white overflow-x-auto">
            {loading ? 'Generating...' : emailAddress?.email_addr || 'Loading...'}
          </span>
          <button 
            onClick={copyToClipboard}
            disabled={loading || !emailAddress} 
            className="text-gray-400 hover:text-white disabled:opacity-50"
          >
            <Copy size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={copyToClipboard}
            disabled={loading || !emailAddress}
            className="bg-app-blue hover:bg-blue-600 disabled:bg-gray-600 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center gap-2"
          >
            <Copy size={20} />
            Copy
          </button>
          <button 
            onClick={generateEmail}
            disabled={loading}
            className="border border-app-blue text-app-blue hover:bg-app-blue/10 disabled:opacity-50 font-medium py-3 px-4 rounded-md flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};
