import React from 'react';

const VillaSpaces = () => {
    // Exact content extracted from your screenshot, split into columns to match the layout
    const leftColumnData = [
        {
            id: 1,
            title: "Deck/patio",
            descriptions: [
                "Private back flagstone patio with flower garden, lots of seating, dining tables, grills, hot tub, umbrella, chimenea firepot. Huge shade tree. Outdoor lighting."
            ]
        },
        {
            id: 2,
            title: "Dining area",
            descriptions: [
                "Seating for 14 people",
                "Large oak dining table w/ two leaves stored in it. Table can be extended to seat groups of 12+. Drop leaf table opens for more seating or can be used for a buffet. Oak chairs, bench, extra chairs."
            ]
        },
        {
            id: 3,
            title: "Kitchen",
            descriptions: [
                "Fully equipped kitchen for cooking and baking. Many small appliances, cooking tools, spices and sundries such as tea, sugar, cooking oil, vinegar, coffee filters."
            ]
        }
    ];

    const rightColumnData = [
        {
            id: 4,
            title: "Lawn/garden",
            descriptions: [
                "Garden with perennial flowering plants surrounds the house. Walled back patio garden with shade trees, umbrella, dining tables and chairs seating up to 18 people. Outdoor lighting, string lights."
            ]
        },
        {
            id: 5,
            title: "Living room",
            descriptions: [
                "Living room with fireplace (firewood provided), tv/entertainment center in cabinet, plenty of seating including three sofas."
            ]
        },
        {
            id: 6,
            title: "Outdoor play area",
            descriptions: [] // No description in the screenshot
        },
        {
            id: 7,
            title: "Porch/veranda",
            descriptions: [
                "Cool, covered, big front porch has glider, long bench, chairs and side tables. Seating for 10. Screened by bushes and trees from quiet residential street just three blocks long."
            ]
        }
    ];

    return (
        <section className="max-w-full  px-4 sm:px-6 lg:px-6 py-16 text-[#1a2b3c] bg-white">
            <div className="md:px-6">

                {/* Header */}
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-4xl md:text-5xl pb-6 font-medium tracking-widemb-10">
                    Spaces
                </h2>

                {/* Two-Column Layout matching the screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

                    {/* --- LEFT COLUMN --- */}
                    <div className="flex flex-col space-y-8">
                        {leftColumnData.map((space) => (
                            <div key={space.id} className="flex flex-col">
                                <h3 className="text-[17px] font-medium text-gray-900 mb-2">
                                    {space.title}
                                </h3>
                                {space.descriptions.map((desc, index) => (
                                    <p key={index} className="text-[16px] text-gray-700 leading-relaxed mb-2 last:mb-0">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* --- RIGHT COLUMN --- */}
                    <div className="flex flex-col space-y-8">
                        {rightColumnData.map((space) => (
                            <div key={space.id} className="flex flex-col">
                                <h3 className="text-[17px] font-medium text-gray-900 mb-2">
                                    {space.title}
                                </h3>
                                {space.descriptions.map((desc, index) => (
                                    <p key={index} className="text-[16px] text-gray-700 leading-relaxed mb-2 last:mb-0">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default VillaSpaces;