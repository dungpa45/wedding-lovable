
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wedding-darkSage text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Tom & Jerry</h2>
          
          <div className="flex justify-center items-center mb-4">
            <Heart size={16} className="text-wedding-blush mr-2" />
            <p>December 31, 2025</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {['Home', 'Countdown', 'Our Story', 'Details', 'RSVP', 'Gallery', 'Guestbook', 'Travel'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm hover:text-wedding-blush transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <p className="text-sm text-white/70">
            © {currentYear} Tom & Jerry Wedding. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
