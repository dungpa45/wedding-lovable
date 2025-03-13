
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop",
      alt: "Couple walking on beach"
    },
    {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop",
      alt: "Couple by the lake"
    },
    {
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=1000&auto=format&fit=crop",
      alt: "Couple in the park"
    },
    {
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop",
      alt: "Couple during sunset"
    },
    {
      src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d35ac?q=80&w=1000&auto=format&fit=crop",
      alt: "Couple walking in the forest"
    },
    {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1000&auto=format&fit=crop",
      alt: "Couple laughing together"
    },
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-wedding-sage/10">
      <div className="container-custom">
        <h2 className="section-title">Our Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md aspect-w-3 aspect-h-2 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div className="max-w-4xl max-h-[90vh] w-[90%]" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
