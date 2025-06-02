
import { Timer, CircleDot, ShieldCheck } from 'lucide-react';

export const EmailInfo = () => {
  return (
    <div className="space-y-2 px-6 py-4">
      <h1 className="text-3xl font-bold text-white">Free Temporary Email.</h1>
      <p className="text-gray-300 text-lg">
        Receive emails anonymously with our free, private, and secure temporary email address generator
      </p>
      
      <div className="flex flex-wrap gap-6 items-center mt-6">
        <div className="flex items-center gap-2">
          <Timer className="text-gray-400" size={20} />
          <span className="text-gray-300">Valid for 1 hour</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleDot className="text-gray-400" size={20} />
          <span className="text-gray-300">Free</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-gray-400" size={20} />
          <span className="text-gray-300">Secure</span>
        </div>
      </div>
    </div>
  );
};
