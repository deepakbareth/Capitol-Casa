import React from 'react';
import { MapPin, Utensils, Car, TrainFront, Plane } from 'lucide-react';

const ExploreArea = () => {
    // Exact data extracted from the screenshot
    const nearbyData = [
        "New Mexico State Capitol - 2 min walk - 0.2 km",
        "Loretto Chapel - 7 min walk - 0.6 km",
        "Canyon Road - 7 min walk - 0.6 km",
        "Santa Fe Plaza - 10 min walk - 0.9 km",
        "Cathedral Basilica of Saint Francis of Assisi - 10 min walk - 0.9 km"
    ];

    const restaurantsData = [
        "Kakawa Chocolate House - 6 min walk",
        "Del Charro - 8 min walk",
        "Pantry Rio - 9 min walk",
        "Gruet Tasting Room - 9 min walk",
        "Inn Of The Governors - 9 min walk"
    ];

    const transitData = [
        { name: "Santa Fe Depot - 12 min walk", icon: TrainFront },
        { name: "Santa Fe Municipal Airport (SAF) - 21 min drive", icon: Plane }
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
            <div className="px-4 sm:px-6 lg:px-12">

                {/* 2-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* === LEFT COLUMN === */}
                    <div className="flex flex-col gap-12">

                        {/* What's nearby */}
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-[#1a2b3c]">
                                <MapPin className="w-6 h-6 stroke-[1.5]" />
                                <h3 className="text-xl md:text-2xl font-semibold">What's nearby</h3>
                            </div>
                            <ul className="space-y-4 pl-9">
                                {nearbyData.map((item, index) => (
                                    <li key={index} className="text-[16px] font-semibold text-gray-700  leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Getting around */}
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-[#1a2b3c]">
                                <Car className="w-6 h-6 stroke-[1.5]" />
                                <h3 className="text-xl md:text-2xl font-semibold">Getting around</h3>
                            </div>
                            <ul className="space-y-4 pl-9">
                                {transitData.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-[16px] text-gray-700 font-semibold leading-relaxed">
                                        <item.icon className="w-5 h-5 text-gray-500 shrink-0 stroke-[1.5]" />
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* === RIGHT COLUMN === */}
                    <div className="flex flex-col">

                        {/* Restaurants */}
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-[#1a2b3c]">
                                <Utensils className="w-6 h-6 stroke-[1.5]" />
                                <h3 className="text-xl md:text-2xl font-semibold">Restaurants</h3>
                            </div>
                            <ul className="space-y-4 pl-9">
                                {restaurantsData.map((item, index) => (
                                    <li key={index} className="text-[16px] font-semibold text-gray-700 leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExploreArea;