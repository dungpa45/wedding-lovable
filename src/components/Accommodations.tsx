
import React from 'react';
import { cn } from "@/lib/utils";
import { Bed, Car, MapPin, Plane } from 'lucide-react';

const Accommodations = () => {
  const hotels = [
    {
      name: "Grand Hotel",
      description: "Special wedding rate of $150/night. Mention \"Smith-Johnson Wedding\" when booking.",
      address: "456 Main Street, City, State, 12345",
      phone: "(123) 456-7890",
      website: "https://grandhotel.com"
    },
    {
      name: "Comfort Inn & Suites",
      description: "Special wedding rate of $120/night. Mention \"Smith-Johnson Wedding\" when booking.",
      address: "789 Oak Avenue, City, State, 12345",
      phone: "(123) 456-7891",
      website: "https://comfortinn.com"
    }
  ];

  return (
    <section id="travel" className="py-20 bg-wedding-sage/10">
      <div className="container-custom">
        <h2 className="section-title">Travel & Accommodations</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Accommodations */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-wedding-sage/30 rounded-full flex items-center justify-center text-wedding-darkSage mr-3">
                  <Bed size={20} />
                </div>
                <h3 className="font-serif text-2xl">Where to Stay</h3>
              </div>
              
              <div className="space-y-8">
                {hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h4 className="font-serif text-lg mb-2">{hotel.name}</h4>
                    <p className="text-slate-600 text-sm mb-3">{hotel.description}</p>
                    <div className="flex items-start mb-2">
                      <MapPin size={16} className="text-wedding-gold flex-shrink-0 mt-1 mr-2" />
                      <p className="text-slate-600 text-sm">{hotel.address}</p>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">Phone: {hotel.phone}</p>
                    <a 
                      href={hotel.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wedding-gold hover:underline text-sm"
                    >
                      Book Online
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Transportation */}
            <div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-wedding-sage/30 rounded-full flex items-center justify-center text-wedding-darkSage mr-3">
                    <Plane size={20} />
                  </div>
                  <h3 className="font-serif text-2xl">Getting Here</h3>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h4 className="font-serif text-lg mb-2">By Air</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    The nearest airport is City International Airport (CIT), approximately 15 miles from the venue.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Airlines serving this airport include:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 text-sm ml-2 mt-1">
                    <li>Delta Airlines</li>
                    <li>American Airlines</li>
                    <li>United Airlines</li>
                  </ul>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-wedding-sage/30 rounded-full flex items-center justify-center text-wedding-darkSage mr-3">
                    <Car size={20} />
                  </div>
                  <h3 className="font-serif text-2xl">Transportation</h3>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="font-serif text-lg mb-2">From Airport to Hotels</h4>
                  <p className="text-slate-600 text-sm mb-3">
                    Shuttle services are available from the airport to all recommended hotels.
                  </p>
                  <p className="text-slate-600 text-sm mb-4">
                    Taxi and rideshare services (Uber, Lyft) are also readily available at the airport.
                  </p>
                  
                  <h4 className="font-serif text-lg mb-2">Wedding Day Transportation</h4>
                  <p className="text-slate-600 text-sm">
                    A shuttle will be provided between the recommended hotels and the venue on the wedding day. The schedule will be posted at the hotel lobby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
