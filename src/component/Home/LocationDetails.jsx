import React from 'react';
import { MapPin, Utensils, CarFront, TrainFront, Plane } from 'lucide-react';

const LocationDetails = () => {
  const nearbyPlaces = [
    { name: 'New Mexico State Capitol', distance: '2 min walk - 0.2 km' },
    { name: 'Loretto Chapel', distance: '7 min walk - 0.6 km' },
    { name: 'Canyon Road', distance: '7 min walk - 0.6 km' },
    { name: 'Santa Fe Plaza', distance: '10 min walk - 0.9 km' },
    { name: 'Georgia O\'Keefe Museum', distance: '12 min walk - 1.0 km' },
  ];

  const restaurants = [
    { name: 'Kakawa Chocolate House', distance: '6 min walk' },
    { name: 'Del Charro', distance: '8 min walk' },
    { name: 'Pantry Rio', distance: '9 min walk' },
    { name: 'Gruet Tasting Room', distance: '9 min walk' },
    { name: 'Zeng', distance: '7 min walk' },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col ">
           <h2 className="text-3xl md:text-5xl font-serif italic text-center text-gray-900 leading-tight">
             Explore the Area
            </h2>
        </div>

        {/* Content Grid: 3 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 xl:gap-16">
          
          {/* COLUMN 1: What's Nearby */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#faf4e1] flex items-center justify-center border border-[#8a4e15]/20 shadow-sm shrink-0">
                <MapPin className="w-6 h-6 text-[#8a4e15]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-gray-900">What's nearby</h3>
            </div>
            <ul className="space-y-5">
              {nearbyPlaces.map((place, index) => (
                <li key={index} className="flex items-end group cursor-default">
                  <span className="text-gray-700 font-light text-sm md:text-base xl:text-lg group-hover:text-[#8a4e15] transition-colors pb-0.5 truncate max-w-[50%] sm:max-w-none">
                    {place.name}
                  </span>
                  <div className="flex-1 mx-2 xl:mx-4 border-b-2 border-dotted border-gray-200 group-hover:border-[#8a4e15]/40 transition-colors relative top-[-6px]"></div>
                  <span className="text-gray-500 font-medium whitespace-nowrap shrink-0 text-xs md:text-sm xl:text-base">
                    {place.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: Restaurants */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#faf4e1] flex items-center justify-center border border-[#8a4e15]/20 shadow-sm shrink-0">
                <Utensils className="w-6 h-6 text-[#8a4e15]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-gray-900">Restaurants</h3>
            </div>
            <ul className="space-y-5">
              {restaurants.map((restaurant, index) => (
                <li key={index} className="flex items-end group cursor-default">
                  <span className="text-gray-700 font-light text-sm md:text-base xl:text-lg group-hover:text-[#8a4e15] transition-colors pb-0.5 truncate">
                    {restaurant.name}
                  </span>
                  <div className="flex-1 mx-2 xl:mx-4 border-b-2 border-dotted border-gray-200 group-hover:border-[#8a4e15]/40 transition-colors relative top-[-6px]"></div>
                  <span className="text-gray-500 font-medium whitespace-nowrap shrink-0 text-xs md:text-sm xl:text-base">
                    {restaurant.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Getting Around */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#faf4e1] flex items-center justify-center border border-[#8a4e15]/20 shadow-sm shrink-0">
                <CarFront className="w-6 h-6 text-[#8a4e15]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-gray-900">Getting around</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-end group cursor-default">
                <div className="flex items-center gap-2 xl:gap-3 pb-0.5 overflow-hidden">
                  <TrainFront className="w-5 h-5 text-gray-400 group-hover:text-[#8a4e15] transition-colors shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-700 font-light text-sm md:text-base xl:text-lg group-hover:text-[#8a4e15] transition-colors truncate">
                    Santa Fe Depot
                  </span>
                </div>
                <div className="flex-1 mx-2 xl:mx-4 border-b-2 border-dotted border-gray-200 group-hover:border-[#8a4e15]/40 transition-colors relative top-[-6px]"></div>
                <span className="text-gray-500 font-medium whitespace-nowrap shrink-0 text-xs md:text-sm xl:text-base">
                  12 min walk
                </span>
              </li>
              
              <li className="flex items-end group cursor-default">
                <div className="flex items-center gap-2 xl:gap-3 pb-0.5 overflow-hidden">
                  <Plane className="w-5 h-5 text-gray-400 group-hover:text-[#8a4e15] transition-colors shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-700 font-light text-sm md:text-base xl:text-lg group-hover:text-[#8a4e15] transition-colors truncate">
                    Santa Fe Municipal Airport (SAF)
                  </span>
                </div>
                <div className="flex-1 mx-2 xl:mx-4 border-b-2 border-dotted border-gray-200 group-hover:border-[#8a4e15]/40 transition-colors relative top-[-6px]"></div>
                <span className="text-gray-500 font-medium whitespace-nowrap shrink-0 text-xs md:text-sm xl:text-base">
                  21 min drive
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationDetails;