import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../../assets/AttractionImg/a1.png';
import img2 from '../../../assets/AttractionImg/a2.png';
import img3 from '../../../assets/AttractionImg/a3.png';
import img4 from '../../../assets/AttractionImg/a4.png';

import img6 from '../../../assets/AttractionImg/a6.png';
import { NavLink } from 'react-router-dom'; 

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 6 High-Quality Clean Images for the Gallery
  const images = [
    img1,
    img2,
    img3,
    img4,
  
    img6
  
  ];

  const totalImages = images.length;

  // Slide Navigation Logic
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  // Auto-Slide Effect (Changes every 4 seconds)
  useEffect(() => {
    // if (!isPaused) {     // when mouse is not hovering, auto-slide
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    // }
  }, [isPaused, nextSlide]);

  // Helper function to calculate position classes for the "Coverflow" effect
  const getSlideClasses = (index) => {
    const isCenter = index === currentIndex;
    const isPrev = index === (currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    const isNext = index === (currentIndex === totalImages - 1 ? 0 : currentIndex + 1);

    if (isCenter) {
      return "z-30 translate-x-0 scale-100 opacity-100 blur-0";
    }
    if (isPrev) {
      return "z-20 -translate-x-[55%] md:-translate-x-[60%] scale-90 opacity-70 blur-[3px] cursor-pointer hover:opacity-100 transition-opacity";
    }
    if (isNext) {
      return "z-20 translate-x-[55%] md:translate-x-[60%] scale-90 opacity-70 blur-[3px] cursor-pointer hover:opacity-100 transition-opacity";
    }
    
    // Hidden images
    return "z-10 translate-x-0 scale-75 opacity-0 pointer-events-none";
  };

  return (
    <section className="py-20 md:py-24 bg-[#fdfcf9] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Header from your screenshot */}
   
           <h2 className="text-3xl md:text-5xl font-serif italic pb-12 text-gray-900 leading-tight">
            Stay in Style
            </h2>

        {/* Carousel Container */}
        <div 
          className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Loop through all images */}
          {images.map((img, index) => (
            <div 
              key={index} 
              // Clicking the side images will slide to them
              onClick={() => {
                if (index === (currentIndex === 0 ? totalImages - 1 : currentIndex - 1)) prevSlide();
                if (index === (currentIndex === totalImages - 1 ? 0 : currentIndex + 1)) nextSlide();
              }}
              className={`absolute top-0 w-[75%] md:w-[60%] h-full rounded-sm md:rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out ${getSlideClasses(index)}`}
            >
              <img 
                src={img} 
                alt={`Property view ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-12 z-40 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-12 z-40 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* View Gallery Button */}
        <div className="mt-12 md:mt-16">
             <NavLink 
            to="/capitolcasa/#gallery" 
            end
            className="px-10 py-3.5 bg-[#8a4e15] text-white rounded-full font-bold uppercase tracking-[0.15em] text-sm shadow-md hover:shadow-lg hover:bg-[#724012] transition-all duration-300 transform hover:-translate-y-1"
          >
            View Gallery
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default GallerySlider;