import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// ==========================================
// CORRECTED EXPLICIT IMPORTS
// ==========================================
import g1 from '../../assets/galleryImages/g1.png';
import g2 from '../../assets/galleryImages/g2.png';
import g3 from '../../assets/galleryImages/g3.png';
import g4 from '../../assets/galleryImages/g4.png';
import g5 from '../../assets/galleryImages/g5.png';
import g6 from '../../assets/galleryImages/g6.png';
import g7 from '../../assets/galleryImages/g7.png';
import g8 from '../../assets/galleryImages/g8.png';
import g9 from '../../assets/galleryImages/g9.png';
import g10 from '../../assets/galleryImages/g10.png';
import g11 from '../../assets/galleryImages/g11.png';
import g12 from '../../assets/galleryImages/g12.png';
import g13 from '../../assets/galleryImages/g13.png';
import g14 from '../../assets/galleryImages/g14.png';
import g15 from '../../assets/galleryImages/g15.png';
import g16 from '../../assets/galleryImages/g16.png';
import g17 from '../../assets/galleryImages/g17.png';
import g18 from '../../assets/galleryImages/g18.png';
import g19 from '../../assets/galleryImages/g19.png';
import g20 from '../../assets/galleryImages/g20.png';
import g21 from '../../assets/galleryImages/g21.png';
import g22 from '../../assets/galleryImages/g22.png';
import g23 from '../../assets/galleryImages/g23.png';
import g24 from '../../assets/galleryImages/g24.png';
import g25 from '../../assets/galleryImages/g25.png';
import g26 from '../../assets/galleryImages/g26.png';
import g27 from '../../assets/galleryImages/g27.png';
import g28 from '../../assets/galleryImages/g28.png';
import g29 from '../../assets/galleryImages/g29.png';
import g30 from '../../assets/galleryImages/g30.png';
import g31 from '../../assets/galleryImages/g31.png';
import g32 from '../../assets/galleryImages/g32.png';
import g33 from '../../assets/galleryImages/g33.png';
import g34 from '../../assets/galleryImages/g34.png';
import g35 from '../../assets/galleryImages/g35.png';
import g36 from '../../assets/galleryImages/g36.png';
import g37 from '../../assets/galleryImages/g37.png';
import g38 from '../../assets/galleryImages/g38.png';
import g39 from '../../assets/galleryImages/g39.png';
import g40 from '../../assets/galleryImages/g40.png';
import g41 from '../../assets/galleryImages/g41.png';
import g42 from '../../assets/galleryImages/g42.png';
import g43 from '../../assets/galleryImages/g43.png';
import g44 from '../../assets/galleryImages/g44.png';
import g45 from '../../assets/galleryImages/g45.png';

const imageAssets = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33, g34, g35, g36, g37, g38, g39, g40,
  g41, g42, g43, g44, g45
];

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Map our explicitly imported array into our grid layout format
  const galleryImages = imageAssets.map((importedImg, index) => {
    const actualNumber = index + 1; // 1 to 45
    
    // Set grid sizes for the masonry look
    let gridClass = "col-span-1 row-span-1"; 
    if (actualNumber % 7 === 0) {
      gridClass = "md:col-span-2 md:row-span-2"; 
    } else if (actualNumber % 5 === 0) {
      gridClass = "md:col-span-2 row-span-1"; 
    } else if (actualNumber % 8 === 0) {
      gridClass = "col-span-1 row-span-2"; 
    }

    return {
      id: actualNumber,
      src: importedImg,
      alt: `Exum Cottage View ${actualNumber}`,
      gridClass: gridClass
    };
  });

  // Lightbox navigation logic
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-[#faf4e1]">
      
      {/* === HERO BANNER === */}
      {/* Added pt-24 so it sits right under your fixed Navbar without being hidden */}
      <div 
        className="relative w-full h-[35vh] md:h-[65vh] min-h-[300px] flex items-center bg-cover bg-center pt-24"
        style={{ backgroundImage: `url(${g29})` }}
      >
        {/* Dark gradient overlay so the white text pops */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
        
        {/* Text Container aligned to the left like your screenshot */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
         {/* === HEADER === */}
        <div className="flex flex-col items-center mb-16">
          <h4 className="text-[#ffae61] font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            A Look Inside
          </h4>
          <h1 className="text-4xl md:text-6xl font-serif italic text-gray-100 leading-tight text-center">
            Exum Cottage Gallery
          </h1>
        </div>
        </div>
      </div>

          <h1 className="text-3xl md:text-6xl font-serif italic pt-8 text-gray-700 leading-tight text-center">
           Our Gallery
          </h1>

      {/* === DYNAMIC MASONRY GRID === */}
      <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 auto-rows-[150px] md:auto-rows-[300px] grid-flow-dense">
          {galleryImages.map((img, index) => (
            <div 
              key={img.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow cursor-pointer ${img.gridClass}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-200"
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-[#001f3f]/0 group-hover:bg-[#001f3f]/30 transition-colors duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                  <ZoomIn className="w-5 h-5 text-[#001f3f]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === FULL-SCREEN LIGHTBOX MODAL === */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-black/55 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </button>

          {/* Left (Prev) Arrow */}
          <button 
            className="absolute top-24 left-6 md:top-1/2 md:-translate-y-1/2 md:left-10 z-50 p-3 bg-black/80 md:bg-white/20 hover:bg-black md:hover:bg-white/30 rounded-full text-white transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>

          {/* Right (Next) Arrow */}
          <button 
            className="absolute top-24 right-6 md:top-1/2 md:-translate-y-1/2 md:right-10 z-50 p-3 bg-black/80 md:bg-white/20 hover:bg-black md:hover:bg-white/30 rounded-full text-white transition-colors"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <div className="relative w-full max-w-5xl max-h-[85vh] px-4 md:px-0 flex items-center justify-center select-none">
            <img 
              src={galleryImages[lightboxIndex].src} 
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl mt-12 md:mt-0" 
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-center px-4 md:px-0 text-white/80">
              <span className="text-sm font-medium tracking-wider">{galleryImages[lightboxIndex].alt}</span>
              <span className="text-sm font-bold tracking-widest">{lightboxIndex + 1} / {galleryImages.length}</span>
            </div>
          </div>

        </div>
      )}

    </main>
  );
};

export default GalleryPage;