
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully. We'll get back to you soon!");
      setName('');
      setEmail('');
      setMessage('');
      setSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center">Contact Us</h1>
          <p className="text-gray-300 text-center mb-12">
            Have questions or feedback? We'd love to hear from you!
          </p>
          
          <div className="bg-app-darker rounded-lg p-6 border border-app-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-app-border rounded-md bg-app-dark text-white focus:outline-none focus:ring-2 focus:ring-app-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-app-border rounded-md bg-app-dark text-white focus:outline-none focus:ring-2 focus:ring-app-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-2 border border-app-border rounded-md bg-app-dark text-white focus:outline-none focus:ring-2 focus:ring-app-blue"
                  required
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 bg-app-blue hover:bg-blue-600 disabled:bg-gray-600 text-white font-medium rounded-md transition-colors"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-app-darker rounded-lg p-6 border border-app-border text-center">
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-gray-300">tempmessageonline@gmail.com</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border text-center">
              <h3 className="text-lg font-medium text-white mb-2">Bangalore</h3>
              <p className="text-gray-300"> Ground Floor, 153, Residency Rd, Shanthala Nagar Bengaluru, Karnataka 560025</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border text-center">
              <h3 className="text-lg font-medium text-white mb-2">Social</h3>
              <div className="flex justify-center gap-4 mt-2">
                <a href="https://x.com/Tempmessage2024
497325
" className="text-gray-300 hover:text-white">
                  X
                </a>
                <a href="https://www.instagram.com/tempmessageonline" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
