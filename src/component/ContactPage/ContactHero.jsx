import React from 'react';
// Import your banner image
import bannerImg from '../../assets/galleryImages/g8.png';

const ContactHero = () => {
  return (
    <div 
      className="relative w-full h-[35vh] md:h-[65vh] min-h-[300px] flex items-center bg-cover bg-center pt-14"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      {/* Text Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
        <h1 className="text-4xl md:text-5xl text-center font-serif text-white font-bold tracking-wide drop-shadow-lg">
          Get in Touch
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;