import React from 'react';
import { Bed, BedDouble, Sofa, Bath, ShowerHead, Toilet } from 'lucide-react';

// --- Helper Component to render multiple icons side-by-side ---
const IconRow = ({ icons, extraCount }) => (
    <div className="flex items-center gap-1.5 mb-3 text-[#1a2b3c]/80">
        {icons.map((Icon, index) => (
            <Icon key={index} className="w-6 h-6 stroke-[1.5]" />
        ))}
        {/* Adds the "+3" badge if extraCount is provided */}
        {extraCount && (
            <span className="ml-1 px-2 py-0.5 bg-gray-200 text-[#1a2b3c] text-xs font-bold rounded-md">
                +{extraCount}
            </span>
        )}
    </div>
);

const AccommodationDetails = () => {
    // --- Exact Data extracted from the screenshot ---
    const bedroomsData = [
        {
            id: 1,
            title: "Back bedroom, King OR two ex-long Twins",
            description: "1 King Bed and 2 Twin Beds",
            icons: [BedDouble, Bed, Bed]
        },
        {
            id: 2,
            title: "Front bedroom, Cal. King",
            description: "1 King Bed",
            icons: [BedDouble]
        },
        {
            id: 3,
            title: "Large bedroom/den. King OR 2 twins. +4 twins as daybeds.",
            description: "6 Twin Beds and 1 King Bed",
            icons: [Bed, Bed, Bed, Bed], // 4 bed icons visible before the badge
            extraCount: 3 // The +3 badge
        },
        {
            id: 4,
            title: "Living Room 1",
            description: "1 Double Sofa Bed",
            icons: [Sofa]
        },
        {
            id: 5,
            title: "Master suite with Cal. King bed and Ensuite bathroom",
            description: "1 King Bed and 1 Twin Bed",
            icons: [BedDouble, Bed]
        },
        {
            id: 6,
            title: "Small bedroom, King OR two ex. long Twins",
            description: "2 Twin Beds and 1 King Bed",
            icons: [BedDouble, Bed, Bed]
        },
    ];

    const bathroomsData = [
        {
            id: 1,
            title: "Central bathroom",
            icons: [Bath, ShowerHead, Toilet], // Adjusted to match the 3 icons in the image
            description: "Soap · Towels provided · Bathtub or shower · Bathtub · Toilet · Shampoo · Hair dryer"
        },
        {
            id: 2,
            title: "Lower level bathroom",
            icons: [Bath, ShowerHead, Toilet],
            description: "Soap · Towels provided · Bathtub or shower · Bathtub · Toilet · Shampoo · Hair dryer"
        },
        {
            id: 3,
            title: "Master bathroom",
            icons: [Bath, Toilet, Bath], // Adjusted to match Bathtub, Toilet, Jetted tub
            description: "Soap · Towels provided · Bathtub or shower · Toilet · Jetted bathtub · Shampoo · Hair dryer"
        }
    ];

    return (
        <section id='accommodation' className="max-w-full mx-auto px-4 rounded-xl sm:px-6 lg:px-8 py-16 my-8 text-[#1a2b3c] bg-white">

            {/* --- ROOMS & BEDS SECTION --- */}
            <div className="mb-16 max-w-7xl mx-auto md:px-6 ">
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-4xl md:text-5xl font-medium tracking-wide mb-2">
                    Rooms & beds
                </h2>
                <p className="text-lg md:text-xl font-medium mb-10">
                    5 bedrooms <span className="font-normal opacity-80">(sleeps 16)</span>
                </p>

                {/* Grid Layout for Bedrooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {bedroomsData.map((room) => (
                        <div key={room.id} className="flex flex-col">
                            <h3 className="text-xl font-medium mb-3">{room.title}</h3>
                            {/* Pass extraCount to the IconRow */}
                            <IconRow icons={room.icons} extraCount={room.extraCount} />
                            <p className="text-base opacity-80 leading-relaxed">
                                {room.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Divider */}
            <hr className="border-t border-gray-300/60 my-12" />

            {/* --- BATHROOMS SECTION --- */}
            <div className='max-w-7xl mx-auto md:px-6 '>
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-3xl md:text-4xl font-medium tracking-wide mb-10">
                    3 bathrooms
                </h2>

                {/* Grid Layout for Bathrooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {bathroomsData.map((bath) => (
                        <div key={bath.id} className="flex flex-col">
                            <h3 className="text-xl font-medium mb-3">{bath.title}</h3>
                            <IconRow icons={bath.icons} />
                            <p className="text-base opacity-80 leading-relaxed">
                                {bath.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default AccommodationDetails;