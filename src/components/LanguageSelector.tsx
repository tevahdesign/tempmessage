
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get current language from path or default to English
  const getCurrentLanguage = () => {
    const pathParts = currentPath.split('/');
    const langCode = pathParts[1];
    if (langCode && languages.some(lang => lang.code === langCode)) {
      return languages.find(lang => lang.code === langCode) || languages[0];
    }
    return languages[0]; // Default to English
  };

  const currentLanguage = getCurrentLanguage();
  
  // Generate language-specific path
  const getLanguagePath = (langCode: string) => {
    if (langCode === 'en') {
      // For English, use the base path without language prefix
      const pathParts = currentPath.split('/');
      if (languages.some(lang => lang.code === pathParts[1])) {
        return '/' + pathParts.slice(2).join('/');
      }
      return currentPath;
    } else {
      // For other languages, add the language prefix
      const pathParts = currentPath.split('/');
      if (languages.some(lang => lang.code === pathParts[1])) {
        return `/${langCode}/${pathParts.slice(2).join('/')}`;
      }
      return `/${langCode}${currentPath}`;
    }
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={16} />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-app-darker border border-app-border z-50">
          <div className="py-1">
            {languages.map((language) => (
              <Link
                key={language.code}
                to={getLanguagePath(language.code)}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-app-dark hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
