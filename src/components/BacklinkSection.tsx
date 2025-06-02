
import { Link } from "lucide-react";

export const BacklinkSection = () => {
  return (
    <div className="py-12 bg-app-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Resources & Related Services</h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover other useful tools and services for online privacy and security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {resourceLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-app-dark border border-app-border rounded-lg p-5 hover:border-app-blue transition-colors flex items-start"
            >
              <Link className="text-app-blue mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-white font-medium">{link.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const resourceLinks = [
  {
    title: "Privacy Tools",
    url: "https://www.privacytools.io",
    description: "A resource for privacy-focused software and services"
  },
  {
    title: "Have I Been Pwned",
    url: "https://haveibeenpwned.com",
    description: "Check if your email has been compromised in a data breach"
  },
  {
    title: "EFF - Privacy",
    url: "https://www.eff.org/issues/privacy",
    description: "Electronic Frontier Foundation's resources on digital privacy"
  },
  {
    title: "Password Generator",
    url: "https://passwordsgenerator.net",
    description: "Create strong, secure passwords to protect your accounts"
  },
  {
    title: "Tor Project",
    url: "https://www.torproject.org",
    description: "Browse the web anonymously with the Tor Browser"
  },
  {
    title: "DuckDuckGo",
    url: "https://duckduckgo.com",
    description: "The search engine that doesn't track you"
  },
  {
    title: "Open Source Alternatives",
    url: "https://alternativeto.net",
    description: "Find open source alternatives to popular software"
  },
  {
    title: "Digital Privacy Tips",
    url: "https://spreadprivacy.com",
    description: "Blog with articles about staying private online"
  }
];
