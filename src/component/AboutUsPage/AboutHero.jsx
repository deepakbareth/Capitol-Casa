import React from 'react';
// Import your banner image (adjust the path if needed based on your folder structure)
import bannerImg from '../../assets/GalleryImg/g1.png';

const AboutHero = () => {
  return (
    <div
      className="relative w-full h-[35vh] md:h-[55vh] min-h-[300px] flex items-center bg-cover bg-center pt-24"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>

      {/* Text Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif italic text-gray-100 leading-tight text-center drop-shadow-lg">
            The Host
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;