
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: '1',
    dietaryRestrictions: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your server
    console.log('RSVP Form submitted:', formData);
    
    toast({
      title: "RSVP Received!",
      description: "Thank you for your response. We look forward to celebrating with you!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guestCount: '1',
      dietaryRestrictions: '',
      message: ''
    });
  };

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">RSVP</h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-12 text-slate-600">
            Please let us know if you'll be able to join us on our special day.
            <br />Kindly respond by September 15, 2024.
          </p>
          
          <div className="bg-wedding-blush/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="attending" className="block text-sm font-medium text-slate-700 mb-1">
                    Will you be attending?*
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                  >
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">No, I cannot attend</option>
                  </select>
                </div>
                
                {formData.attending === 'yes' && (
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-slate-700 mb-1">
                      Number of Guests*
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                    >
                      <option value="1">1 (Just me)</option>
                      <option value="2">2 (Me + 1 guest)</option>
                    </select>
                  </div>
                )}
              </div>
              
              {formData.attending === 'yes' && (
                <div>
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-slate-700 mb-1">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Vegetarian, vegan, gluten-free, allergies, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Share your thoughts or well wishes"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className={cn(
                    "inline-block bg-wedding-darkSage text-white font-sans",
                    "px-8 py-3 rounded uppercase tracking-wider text-sm",
                    "transition-all hover:bg-wedding-gold"
                  )}
                >
                  Submit RSVP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
