
import React from 'react';
import { cn } from "@/lib/utils";
import { Gift, Home, Plane } from 'lucide-react';

const Registry = () => {
  const registries = [
    {
      name: "Amazon",
      description: "Shop our Amazon registry for a variety of gifts.",
      icon: <Gift size={24} />,
      link: "https://amazon.com"
    },
    {
      name: "Honeymoon Fund",
      description: "Contribute to our dream honeymoon in Bali.",
      icon: <Plane size={24} />,
      link: "https://honeyfund.com"
    },
    {
      name: "Home Depot",
      description: "Help us build our new home together.",
      icon: <Home size={24} />,
      link: "https://homedepot.com"
    }
  ];

  return (
    <section id="registry" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Registry</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-12 text-slate-600">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've registered at the following places.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registries.map((registry, index) => (
              <div key={index} className="bg-wedding-blush/10 rounded-lg p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-wedding-sage/30 rounded-full flex items-center justify-center text-wedding-darkSage">
                  {registry.icon}
                </div>
                <h3 className="font-serif text-xl mb-2">{registry.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{registry.description}</p>
                <a 
                  href={registry.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-block bg-wedding-darkSage text-white font-sans",
                    "px-6 py-2 rounded uppercase tracking-wider text-xs",
                    "transition-all hover:bg-wedding-gold"
                  )}
                >
                  View Registry
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registry;
