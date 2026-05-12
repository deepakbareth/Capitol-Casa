import React, { useState, useEffect } from 'react';
import heroBg1 from '../../assets/images/h1.jpg';
import heroBg2 from '../../assets/images/h2.jpg';
import heroBg3 from '../../assets/images/h3.jpg';

const Banner = () => {
    const images = [heroBg1, heroBg2, heroBg3];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        /* MOBILE FIX: Changed h-[80vh] to h-[60vh]. 
           This makes the banner shorter on phones so the "About Us" 
           section starts showing up at the bottom.
        */
        <div className="relative h-[60vh] md:h-screen w-full pt-20 md:pt-32 overflow-hidden bg-gray-950">

            {/* 1. SEAMLESS BACKGROUND SLIDER */}
            {images.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                >
                    <img
                        src={img}
                        alt={`The Capitol Casa ${i}`}
                        className="absolute inset-0 h-full w-full object-cover object-center "
                    />
                </div>
            ))}

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />

            {/* 2. CENTERED CONTENT CONTAINER */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 md:px-12 text-center text-white">

                <div className="max-w-6xl space-y-4 md:space-y-12">



                    {/* Headline Section */}
                    <h1 className="flex flex-col items-center animate-fade-in-down delay-200 p-3 mt-50 rounded-full px-10">

                        {/* Part 1: Main Name */}
                        <span className="text-3xl sm:text-5xl md:text-7xl  font-serif italic font-medium leading-none tracking-tight">
                            The Capitol Casa
                        </span>



                    </h1>


                </div>
            </div>

            {/* 3. SLIDE INDICATORS */}
            <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1 cursor-pointer transition-all duration-700 rounded-full ${i === index ? 'w-8 md:w-12 bg-white' : 'w-2 bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;