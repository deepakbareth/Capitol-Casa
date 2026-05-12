import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Import an image for the right side. Replace with an actual property image.
import propertyImg from '../../assets/images/h4.jpg';
import {
  Umbrella,
  Microwave,
  Soup,
  Flower,
  Utensils
} from 'lucide-react';

const AboutProperty = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Amenities data updated for capitol casa's specific offerings
  const amenities = [
    {
      name: 'Deck or patio',
      icon: <Umbrella className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Kitchen',
      icon: <Microwave className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Kitchenette',
      icon: <Soup className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Outdoor play area',
      icon: <Flower className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Dining area',
      icon: <Utensils className="w-6 h-6" strokeWidth={1.5} />
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="lg:col-span-7 flex flex-col  justify-center space-y-8">

          {/* Modern Heading Area */}
          <div className="space-y-3 ">
            <h4 className="text-[#8a4e15] font-bold uppercase tracking-[0.2em] text-xl">About this property</h4>
            <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900  leading-tight">
              Capitol Casa
            </h2>
            <p className="text-lg md:text-xl font-medium text-gray-600">
              Santa Fe, NM
            </p>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg text-gray-600 text-[18px] leading-relaxed max-w-none font-light">
            <p>
              Walk everywhere in the Historic Downtown area! Capitol Casa is located on a quiet residential street just three blocks long--less than a 5-minute walk to the Plaza and to Canyon Road. The historic 1920's adobe home has fresh furnishings, fine linens, original art and neat antiques in cohesive, tasteful decor reflecting the region. Its perfect location is 1/2 block from the State Capitol with its extensive art collection by New Mexico's many fine artists and sculptors.  </p>



          </div>

          {/* See More / See Less Button */}
          <div>
            <NavLink
              to="/capitolcasa/the-host"
              className="px-10 py-3.5 bg-[#8a4e15] text-white rounded-full font-bold uppercase tracking-[0.15em] text-sm shadow-md hover:shadow-lg hover:bg-[#724012] transition-all duration-300 transform hover:-translate-y-1"
            >
              See More

            </NavLink>
          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGE & AMENITIES OVERLAY === */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group lg:sticky lg:top-24">

          {/* Background Image */}
          <img
            src={propertyImg}
            alt="capitol casa Property"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Blur & Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2.5px] transition-all duration-500 group-hover:backdrop-blur-[2.5px]" />

          {/* Amenities Content inside the image */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white z-10">
            <ul className="space-y-4">
              {amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-5 group/item">
                  {/* Glassmorphism Icon Box */}
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white transition-all group-hover/item:bg-white group-hover/item:text-[#8a4e15]">
                    {item.icon}
                  </div>
                  <span className="text-lg font-light tracking-wide">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProperty;