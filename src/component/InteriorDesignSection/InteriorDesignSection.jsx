import React, { useState, useEffect } from 'react';
import img1 from '../../assets/AttractionImg/a2.png';
import img2 from '../../assets/AttractionImg/a5.png';

const InteriorDesignSection = () => {
  // State to track which images are currently showing
  const [isSwapped, setIsSwapped] = useState(false);

  // Set up the 5-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 font-sans overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col w-full group">
          
          {/* Main Image Container - aspect-square holds the shape while absolute images crossfade inside */}
          <div className="relative w-full mb-10 aspect-square overflow-hidden rounded-3xl shadow-[0_20px_20px_rgba(0,0,0,0.08)] transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            {/* Image 1 */}
            <img 
              src={img1} 
              alt="Living room with green sofa and lamp" 
              className={`absolute inset-0 w-full h-full object-cover bg-gray-100 transition-opacity duration-1000 ease-in-out md:hover:scale-105 ${isSwapped ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Image 2 (Fades in when swapped) */}
            <img 
              src={img2} 
              alt="Alternate view" 
              className={`absolute inset-0 w-full h-full object-cover bg-gray-100 transition-opacity duration-1000 ease-in-out md:hover:scale-105 ${isSwapped ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Capitol Casa
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            Experience the ultimate escape with unparalleled comfort
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full h-full">
          
          {/* Image Container with Dotted Pattern */}
          <div className="relative w-full flex justify-start mb-12 lg:mb-20">
            {/* Softened Dotted Pattern Background */}
            <div 
              className="absolute top-0 right-0 w-3/4 h-[110%] z-0 opacity-50"
              style={{
                backgroundImage: 'radial-gradient(circle, #97bd0e 2px, transparent 2.5px)',
                backgroundSize: '24px 24px'
              }}
            ></div>
            
            {/* Circular Image Container */}
            <div className="relative z-10 w-[80%] aspect-square mt-12 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
              {/* Image 2 */}
              <img 
                src={img2} 
                alt="Grey sofa detail" 
                className={`absolute inset-0 w-full h-full object-cover bg-gray-200 transition-opacity duration-1000 ease-in-out ${isSwapped ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Image 1 (Fades in when swapped) */}
              <img 
                src={img1} 
                alt="Alternate detail" 
                className={`absolute inset-0 w-full h-full object-cover bg-gray-200 transition-opacity duration-2000 ease-in-out ${isSwapped ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>

          {/* Right Column Text */}
          <div className="mt-auto">
            <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
             Step into a thoughtfully curated space where every detail is designed for your relaxation. From plush bedding to inviting living areas, our accommodations offer a seamless blend of timeless charm and everyday comfort. Wake up refreshed and ready to explore, knowing a peaceful haven awaits your return.
            </p>
        
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignSection;