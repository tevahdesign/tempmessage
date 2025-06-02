
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Last updated: May 9, 2025
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Temp-mail ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our temporary email service.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information Collection</h2>
            <p className="text-gray-300 mb-4">
              <strong>Information You Provide:</strong> We do not require you to create an account or provide personal information to use our service.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Automatically Collected Information:</strong> We may collect certain information automatically when you use our service, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data (how you interact with our service)</li>
              <li>Cookies and similar technologies</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Use of Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Providing and maintaining our service</li>
              <li>Improving and optimizing our service</li>
              <li>Understanding how users interact with our service</li>
              <li>Detecting, preventing, and addressing technical issues</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Email Content</h2>
            <p className="text-gray-300 mb-4">
              All emails received through our temporary email service are automatically deleted after a set period. We do not read, analyze, or store the content of these emails beyond this temporary period.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Cookies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies to enhance your experience on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Our service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us through our Contact page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
