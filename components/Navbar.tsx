import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Services', path: '/services' },
  { label: 'Media', path: '/media' },
  { label: 'EI Audit', path: '/audit' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-darker/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="z-50">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                location.pathname === item.path ? 'text-brand-accent' : 'text-brand-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" to="/contact" className="ml-4 py-2 px-5 text-sm">
            Book a Call
          </Button>
        </div>

        {/* Mobile Toggle (Visible only when closed) */}
        {!isOpen && (
          <button 
            className="lg:hidden z-50 text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        )}

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-darker z-[60] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-brand-accent transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 px-6 py-8 overflow-y-auto flex-grow">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-2xl font-serif font-medium transition-colors ${
                  location.pathname === item.path ? 'text-brand-accent' : 'text-white'
                } hover:text-brand-accent`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="p-6 mt-auto border-t border-white/10 bg-brand-darker">
            <Button variant="primary" to="/contact" className="w-full justify-center py-4 text-base shadow-lg">
              Book a Discovery Call
            </Button>
            <p className="text-center text-brand-muted text-xs mt-6">
              &copy; {new Date().getFullYear()} Mubell Empathy Academy
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;