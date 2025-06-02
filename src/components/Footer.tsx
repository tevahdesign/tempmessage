import { Link } from 'react-router-dom';
import { Mail, Shield, Info, HelpCircle, Globe, Twitter, Instagram, Linkedin, Youtube} from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
  ];
  
  // Social media links
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/Tempmessage2024' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/tempmessageonline' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/temp-message-b65229368' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/channel/UCQXeZZYq8nwHxRGWkVOq-Sg' },
   
  ];
  
  return (
    <footer className="bg-app-darker border-t border-app-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/d47163e5-465f-4cb7-97fc-b5d102a04ae2.png" 
                alt="Temp Message Logo" 
                className="h-8 w-auto mr-2" 
              />
              <h3 className="text-2xl font-bold text-white">Temp Message</h3>
            </div>
            <p className="mt-2 text-gray-300 max-w-md">
              Secure, anonymous temporary email service. Protect your privacy online with our disposable email addresses.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              <Globe size={16} className="inline mr-2" />
              Languages
            </h3>
            <ul className="mt-4 space-y-4">
              {languages.map((language) => (
                <li key={language.code}>
                  <Link 
                    to={language.code === 'en' ? '/' : `/${language.code}`} 
                    className="text-gray-300 hover:text-white"
                  >
                    {language.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-app-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {currentYear} Temp Message. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-base text-gray-400 mr-4">
              
            </p>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  );
};
