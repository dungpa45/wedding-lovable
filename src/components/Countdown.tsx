
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Clock } from 'lucide-react';

const Countdown = () => {
  // Wedding date - October 15, 2024
  const weddingDate = new Date('October 15, 2024 00:00:00').getTime();
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
    <section id="countdown" className="py-16 bg-wedding-blush/10">
      <div className="container-custom">
        <h2 className="section-title">Countdown to Our Big Day</h2>
        
        <div className="flex items-center justify-center mb-8">
          <Clock className="text-wedding-gold mr-2" size={28} />
          <p className="font-serif text-lg italic">October 15, 2024</p>
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
                "bg-white rounded-lg shadow-md p-4 w-[90px] md:w-[130px]",
                "text-center border border-wedding-gold/30"
              )}
            >
              <div className="font-serif text-3xl md:text-4xl text-wedding-darkSage">
                {item.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
