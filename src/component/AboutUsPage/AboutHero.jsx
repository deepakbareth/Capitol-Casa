import React from 'react';
// Import your banner image (adjust the path if needed based on your folder structure)
import bannerImg from '../../assets/galleryImages/g3.png';

const AboutHero = () => {
  return (
    <div 
      className="relative w-full h-[35vh] md:h-[65vh] min-h-[300px] flex items-center bg-cover bg-center pt-24"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif italic text-gray-100 leading-tight text-center">
            About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;