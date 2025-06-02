
import { ArrowRight, Shield, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="bg-app-darker py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Free Temporary Email Service
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg text-gray-300">
            Protect your privacy. Use our disposable email addresses to avoid spam and keep your real inbox clean.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/#email-generator"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-app-blue hover:bg-blue-600 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-app-dark rounded-lg p-6 border border-app-border">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-app-blue" />
              <h3 className="ml-3 text-xl font-medium text-white">Secure & Anonymous</h3>
            </div>
            <p className="mt-4 text-gray-400">
              No personal information required. Keep your identity private while using online services.
            </p>
          </div>
          
          <div className="bg-app-dark rounded-lg p-6 border border-app-border">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-app-blue" />
              <h3 className="ml-3 text-xl font-medium text-white">Temporary Access</h3>
            </div>
            <p className="mt-4 text-gray-400">
              Emails are temporary and will be automatically deleted after a set period. No long-term commitment.
            </p>
          </div>
          
          <div className="bg-app-dark rounded-lg p-6 border border-app-border">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-app-blue" />
              <h3 className="ml-3 text-xl font-medium text-white">Instant Setup</h3>
            </div>
            <p className="mt-4 text-gray-400">
              No registration needed. Get a new email address instantly and start receiving emails right away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
