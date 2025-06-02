
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6">About Us</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Welcome to Temp-mail, your reliable source for temporary and disposable email addresses. 
              Our mission is to provide a simple, effective solution for protecting your privacy online.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At Temp-mail, we believe in internet privacy as a fundamental right. In today's digital landscape,
              your personal information is constantly at risk of being collected, analyzed, and sold. Our service
              provides a barrier between your personal inbox and the services you interact with online.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Started</h2>
            <p className="text-gray-300 mb-4">
              Temp-mail was founded in 2025 by a team of privacy advocates and security professionals who
              recognized the need for accessible privacy tools. What began as a small project has grown into
              a trusted service used by thousands of people every day.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Technology</h2>
            <p className="text-gray-300 mb-4">
              Our service utilizes the Guerrilla Mail API to create temporary email addresses that automatically
              expire after a set period. This ensures that your temporary inbox doesn't become a permanent
              target for spam or data collection. We've designed our system to be fast, reliable, and
              user-friendly.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Privacy Commitment</h2>
            <p className="text-gray-300 mb-4">
              We don't track your usage, we don't store personal data, and we don't monetize your information.
              Our service is designed to be as privacy-focused as possible, aligning with our core mission.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
