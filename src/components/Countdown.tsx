
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Clock, CalendarClock, PartyPopper } from 'lucide-react';

const Countdown = () => {
  // Wedding date - December 31, 2025
  const weddingDate = new Date('December 31, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        // Wedding day has arrived
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      // Calculate time units
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-20 bg-gradient-to-b from-wedding-blush/20 to-wedding-sage/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-wedding-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-wedding-blush/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-wedding-gold/20">
          <div className="text-center mb-10">
            <h2 className="section-title">Countdown to Our Big Day</h2>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <CalendarClock className="text-wedding-gold" size={24} />
              <p className="font-serif text-xl italic">December 31, 2025</p>
            </div>
            
            <p className="text-slate-600 max-w-lg mx-auto">
              Join us as we celebrate our special day. The countdown has begun!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item) => (
              <div 
                key={item.label}
                className={cn(
                  "bg-white rounded-lg shadow-md p-6 w-[100px] md:w-[140px]",
                  "text-center border border-wedding-gold/30 transform transition-all duration-300 hover:scale-105",
                  "relative overflow-hidden"
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-wedding-gold/30 to-wedding-darkSage/30"></div>
                <div className="font-serif text-4xl md:text-5xl text-wedding-darkSage font-bold">
                  {item.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-slate-600 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <a 
              href="#rsvp"
              className="flex items-center gap-2 bg-wedding-darkSage text-white px-6 py-3 rounded-full hover:bg-wedding-gold transition-colors duration-300 font-medium"
            >
              <PartyPopper size={18} />
              <span>RSVP Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
