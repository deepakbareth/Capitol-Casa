import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ImportantInfo = () => {
    // State to handle the See More / See Less toggle
    const [isExpanded, setIsExpanded] = useState(false);

    // Exact content extracted from the screenshot
    const infoItems = [
        <span key="1">Property Registration Number STR-155964</span>,
        <span key="2"><strong className="font-semibold text-gray-900">Property #</strong> 14844</span>,
        <span key="3">Extra-person charges may apply and vary depending on property policy</span>,
        <span key="4">Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</span>,
        <span key="5">Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</span>,
        <span key="6">Onsite parties or group events are strictly prohibited</span>,
        <span key="7">Note from host: Daytime only, gatherings of up to 20 people.</span>,
        <span key="8">Long-term renters welcome</span>,
        <span key="9">This property uses eco-friendly cleaning products</span>,
        <span key="10">Host has indicated there is a carbon monoxide detector on the property</span>,
        <span key="11">Host has indicated there is a smoke detector on the property</span>,
        <span key="12">Safety features at this property include a fire extinguisher, a first aid kit, and a deadbolt lock</span>
    ];

    // Determine how many items to show based on expansion state
    const visibleItems = isExpanded ? infoItems : infoItems.slice(0, 5);

    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
            <div className="px-4 sm:px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">

                    {/* === LEFT COLUMN: Section Title === */}
                    <div className="w-full lg:w-1/3 shrink-0">
                        <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-4xl md:text-5xl font-medium tracking-wide sticky top-28">
                            Important information
                        </h2>
                    </div>

                    {/* === RIGHT COLUMN: Content List === */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                            You need to know
                        </h3>

                        <div className="space-y-4">
                            {visibleItems.map((item, index) => (
                                <p key={index} className="text-[16px] text-gray-700 leading-relaxed font-light">
                                    {item}
                                </p>
                            ))}
                        </div>

                        {/* Interactive Toggle Button */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-6 flex items-center gap-1.5 text-[#0066c8] hover:text-[#004d99] hover:underline font-medium transition-colors text-[16px]"
                        >
                            {isExpanded ? 'See less' : 'See more'}
                            {isExpanded ? (
                                <ChevronUp className="w-4 h-4" strokeWidth={2} />
                            ) : (
                                <ChevronDown className="w-4 h-4" strokeWidth={2} />
                            )}
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImportantInfo;