
import React from 'react';
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin } from 'lucide-react';

const Details = () => {
  return (
    <section id="details" className="py-20 bg-wedding-blush/20">
      <div className="container-custom">
        <h2 className="section-title">Wedding Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Ceremony */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center animate-fade-in">
            <div className="w-16 h-16 bg-wedding-sage/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-wedding-darkSage" size={24} />
            </div>
            <h3 className="font-serif text-xl mb-3">Ceremony</h3>
            <p className="text-slate-600 mb-2">Friday, October 15, 2024</p>
            <p className="text-slate-600 mb-2">3:00 PM</p>
            <p className="text-slate-600">Rosewood Gardens</p>
            <p className="text-slate-600 mb-4">123 Blossom Avenue</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wedding-gold hover:underline inline-flex items-center"
            >
              <MapPin size={14} className="mr-1" />
              View Map
            </a>
          </div>
          
          {/* Reception */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="w-16 h-16 bg-wedding-sage/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-wedding-darkSage" size={24} />
            </div>
            <h3 className="font-serif text-xl mb-3">Reception</h3>
            <p className="text-slate-600 mb-2">Friday, October 15, 2024</p>
            <p className="text-slate-600 mb-2">5:30 PM</p>
            <p className="text-slate-600">Rosewood Gardens Ballroom</p>
            <p className="text-slate-600 mb-4">123 Blossom Avenue</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wedding-gold hover:underline inline-flex items-center"
            >
              <MapPin size={14} className="mr-1" />
              View Map
            </a>
          </div>
          
          {/* Dress Code */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="w-16 h-16 bg-wedding-sage/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-wedding-darkSage"
              >
                <path d="M3.2 9.7l7.2 3.1a1 1 0 0 0 .4.1 1 1 0 0 0 .4-.1l7.1-3"></path>
                <path d="M20.4 8.7l-8-3.4a1 1 0 0 0-.8 0l-8 3.4a1 1 0 0 0 0 1.8l2.5 1.1"></path>
                <path d="M12 12v8"></path>
                <path d="M17 17l-5-2-5 2v-6l5-2 5 2Z"></path>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Dress Code</h3>
            <p className="text-slate-600 mb-6">Semi-formal / Cocktail Attire</p>
            <p className="text-slate-600 text-sm">
              Ladies: Cocktail dresses or dressy separates<br />
              Gentlemen: Suit and tie or dress shirt with slacks
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-center mb-6">Wedding Timeline</h3>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">2:30 PM</div>
                <div>
                  <h4 className="font-serif text-lg">Guest Arrival</h4>
                  <p className="text-slate-600 text-sm">Please arrive 30 minutes before the ceremony begins</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">3:00 PM</div>
                <div>
                  <h4 className="font-serif text-lg">Ceremony Begins</h4>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">4:00 PM</div>
                <div>
                  <h4 className="font-serif text-lg">Cocktail Hour</h4>
                  <p className="text-slate-600 text-sm">Enjoy drinks and hors d'oeuvres while the wedding party takes photos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">5:30 PM</div>
                <div>
                  <h4 className="font-serif text-lg">Reception & Dinner</h4>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">7:00 PM</div>
                <div>
                  <h4 className="font-serif text-lg">First Dance & Toasts</h4>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">7:30 PM</div>
                <div>
                  <h4 className="font-serif text-lg">Dancing Begins</h4>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-20 sm:w-32 flex-shrink-0 font-semibold text-wedding-darkSage">10:00 PM</div>
                <div>
                  <h4 className="font-serif text-lg">Farewell</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
