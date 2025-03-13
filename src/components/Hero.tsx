
import React from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const weddingDate = "December 31, 2025";
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-wedding-blush/30">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=2940&auto=format&fit=crop')" }}
      />
      
      <div className="container-custom relative z-10 text-center py-16 animate-fade-in">
        <p className="font-sans text-sm md:text-base uppercase tracking-widest mb-4 text-wedding-darkSage">
          We're getting married
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl mb-6">
          <span className="block mb-2">Tom</span>
          <span className="inline-block w-8 h-8 mx-3 rounded-full bg-wedding-gold/30 relative">
            <span className="absolute inset-0 flex items-center justify-center">&</span>
          </span>
          <span className="block mt-2">Jerry</span>
        </h1>
        
        <div className={cn(
          "w-40 h-0.5 bg-wedding-gold/70 mx-auto my-8"
        )} />
        
        <p className="font-serif text-2xl md:text-3xl italic mb-8">
          {weddingDate}
        </p>
        
        <a 
          href="#rsvp"
          className={cn(
            "inline-block bg-wedding-darkSage text-white font-sans",
            "px-8 py-3 rounded uppercase tracking-wider text-sm",
            "transition-all hover:bg-wedding-gold"
          )}
        >
          RSVP Now
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#our-story" aria-label="Scroll down">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-wedding-darkSage"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
