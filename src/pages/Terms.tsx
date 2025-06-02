
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Last updated: May 9, 2025
            </p>
            
            <p className="text-gray-300 mb-4">
              Please read these Terms of Service carefully before using the Temp-mail website.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p className="text-gray-300 mb-4">
              Unless otherwise stated, Temp-mail and/or its licensors own the intellectual property rights for all material on Temp-mail. All intellectual property rights are reserved.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Restrictions</h2>
            <p className="text-gray-300 mb-4">
              You are specifically restricted from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Using our service for illegal activities</li>
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
              <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Service Limitations</h2>
            <p className="text-gray-300 mb-4">
              Our temporary email service is provided as-is. Emails received through the service are temporarily stored and automatically deleted after a set period. We make no guarantees about the reliability, availability, or security of the service for any critical communications.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Limit or exclude our or your liability for death or personal injury</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us through our Contact page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
