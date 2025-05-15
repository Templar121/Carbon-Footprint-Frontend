import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how' },
    { name: 'Take Action', href: '#action' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Know more about Me', href: 'https://subhayanmukherjee.netlify.app/', external: true }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-emerald-950/90 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-2 group"
            aria-label="Carbon Footprint"
          >
            <Leaf 
              className={`h-6 w-6 transition-all duration-300 ${
                isScrolled ? 'text-emerald-400' : 'text-white'
              } group-hover:text-emerald-300`} 
            />
            <span className="text-xl font-bold">
              <span className={`transition-all duration-300 ${
                isScrolled ? 'text-emerald-400' : 'text-white'
              }`}>Carbon</span>
              <span className={`transition-all duration-300 ${
                isScrolled ? 'text-emerald-200' : 'text-emerald-300'
              }`}>Footprint</span>
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-200 hover:text-emerald-300' 
                    : 'text-gray-200 hover:text-emerald-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-900/95 backdrop-blur-xl absolute top-full left-0 w-full py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-gray-200 hover:text-emerald-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
