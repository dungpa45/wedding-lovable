
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Details', href: '#details' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Registry', href: '#registry' },
    { name: 'Travel', href: '#travel' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a 
          href="#home" 
          className="font-serif text-2xl font-semibold text-wedding-darkSage"
        >
          J&A
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm uppercase tracking-wider hover:text-wedding-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-sans text-lg uppercase tracking-wider hover:text-wedding-gold"
            onClick={toggleMenu}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
