
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-app-dark border-b border-app-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d47163e5-465f-4cb7-97fc-b5d102a04ae2.png" 
                alt="Temp Message Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-2xl font-bold text-white">Temp Message</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <LanguageSelector />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <LanguageSelector />
            <button
              className="text-white p-2 ml-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-app-darker border-t border-app-border">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-app-darker rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
