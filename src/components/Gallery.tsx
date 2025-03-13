import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { X } from 'lucide-react';

// Import images from assets folder
import couple1 from "../assets/images/gallery/couple1.jpg";
import couple2 from "../assets/images/gallery/couple2.jpg";
import couple3 from "../assets/images/gallery/couple3.jpg";
import couple4 from "../assets/images/gallery/couple4.jpg";
import couple5 from "../assets/images/gallery/couple5.jpg";
import couple6 from "../assets/images/gallery/couple6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: couple1,
      alt: "Couple walking on beach"
    },
    {
      src: couple2,
      alt: "Couple by the lake"
    },
    {
      src: couple3,
      alt: "Couple in the park"
    },
    {
      src: couple4,
      alt: "Couple during sunset"
    },
    {
      src: couple5,
      alt: "Couple walking in the forest"
    },
    {
      src: couple6,
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
