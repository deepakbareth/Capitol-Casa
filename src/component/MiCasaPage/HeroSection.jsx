import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import img1 from '../../assets/GalleryImg/g3.png';
import img2 from '../../assets/GalleryImg/g2.png';
import img3 from '../../assets/GalleryImg/g1.png';

const HeroSection = () => {
    // State for the interactive search bar
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchFilters, setSearchFilters] = useState({
        location: 'Santa Fe, NM',
        dates: 'Select Dates',
        guests: '2 Guests',
        property: 'Luxury Villa'
    });

    // Dropdown options
    const options = {
        location: ['Santa Fe', 'Downtown', 'Canyon Rd'],
        dates: ['Anytime', 'Weekend', 'Next Month'],
        guests: ['1 Guest', '2 Guests', '3-4 Guests', '5+'],
        property: ['Luxury Villa', 'Apartment', 'Estate']
    };

    const handleToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleSelect = (dropdown, value) => {
        setSearchFilters(prev => ({ ...prev, [dropdown]: value }));
        setActiveDropdown(null);
    };

    // Reusable Custom Dropdown Component for the Search Bar
    const FilterDropdown = ({ label, keyName }) => (
        <div className="relative flex-1 cursor-pointer p-1 sm:p-2 lg:p-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleToggle(keyName)}>
            {/* Scaled label text */}
            <p className="text-[6px] sm:text-[10px] lg:text-[13px] text-white font-medium mb-0.5 lg:mb-1 truncate">{label}</p>
            <div className="flex items-center justify-between gap-1">
                {/* Scaled value text */}
                <span className="font-semibold text-white text-[7px] sm:text-xs lg:text-base truncate">
                    {searchFilters[keyName]}
                </span>
                <ChevronDown className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white transition-transform duration-200 shrink-0 ${activeDropdown === keyName ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {activeDropdown === keyName && (
                <div className="absolute top-full left-0 mt-2 lg:mt-4 w-[120px] sm:w-[150px] lg:w-[200px] bg-white rounded-lg lg:rounded-xl shadow-2xl border border-gray-100 py-1 lg:py-2 z-50">
                    {options[keyName].map(opt => (
                        <div
                            key={opt}
                            className="px-3 py-1.5 lg:px-5 lg:py-2.5 hover:bg-gray-50 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelect(keyName, opt);
                            }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <section className="relative  pt-24 pb-24 sm:pt-16 sm:pb-32 lg:pt-25 lg:pb-40 px-2 sm:px-4 lg:px-10 max-w-full font-sans overflow-hidden">

            {/* === MAIN LAYOUT GRID (Forced Horizontal on all sizes) === */}
            {/* Notice `flex-row` is maintained, `flex-col` is removed */}
            <div className="flex flex-row gap-2 sm:gap-4 lg:gap-8">

                {/* 1. LEFT COLUMN: Text & Small Image */}
                <div className="w-[40%] lg:w-[35%] flex flex-col justify-between">
                    <div>
                        {/* Scaled Headers */}
                        <h1 className="text-[14px] sm:text-2xl lg:text-5xl font-bold text-[#4a4a4a] leading-[1.1] tracking-tight mb-2 lg:mb-6">
                            Exceptional Stays. <br />
                            <span className="text-gray-900">Historic Living.</span>
                        </h1>
                        <p className="text-gray-500 text-[8px] sm:text-sm lg:text-xl leading-snug lg:leading-relaxed max-w-md mb-3 lg:mb-8">
                            We understand how important your getaway is. Our goal is to make your stay effortless, exciting, and completely stress-free.
                        </p>

                        {/* Scaled Button */}
                        <a href="/capitolcasa/gallery" className="inline-block">
                            <button className="bg-[#d4b01e] hover:bg-[#bfa01a] text-white font-semibold cursor-pointer py-1 px-2 sm:py-2 sm:px-4 lg:py-3.5 lg:px-6 rounded-full flex items-center gap-1 lg:gap-2 transition-all transform hover:scale-105 shadow-lg shadow-[#d4b01e]/30 text-[8px] sm:text-sm lg:text-base">
                                <div className="bg-white text-[#d4b01e] rounded-full p-0.5 lg:p-1 flex items-center justify-center">
                                    <ArrowUpRight className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 stroke-[2.5] lg:stroke-[3]" />
                                </div>
                                Explore Property
                            </button>
                        </a>
                    </div>

                    {/* Bottom Left Small Image */}
                    <div className="h-[80px] sm:h-[150px] lg:h-[320px] w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden mt-4 sm:mt-8 lg:mt-16">
                        <img src={img1} alt="Interior detail" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* 2. CENTER COLUMN: Staggered Medium Image (No longer hidden on mobile) */}
                <div className="w-[30%] pt-6 sm:pt-12 lg:pt-54">
                    <div className="h-[120px] sm:h-[220px] lg:h-[500px] w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
                        <img src={img2} alt="Living space" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* 3. RIGHT COLUMN: Tall Image */}
                <div className="w-[30%]">
                    <div className="h-[180px] sm:h-[320px] lg:h-[700px] w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
                        <img src={img3} alt="Bathroom or Master" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

            {/* === FLOATING INTERACTIVE SEARCH BAR === */}
            {/* Positioned relative to bottom, keeping horizontal layout */}
            <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-0 right-0 w-full px-2 sm:px-4 flex justify-center z-40">

                <div className="bg-black/40 backdrop-blur-sm rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-1 sm:p-2 lg:p-3 w-full max-w-5xl flex flex-row items-center justify-between gap-2">

                    {/* Horizontal Divider container - Forced horizontal on all screens */}
                    <div className="flex flex-row w-[80%] md:w-[85%] divide-x divide-gray-200 pl-2 lg:pl-4">
                        <FilterDropdown label="Location" keyName="location" />
                        <FilterDropdown label="Dates" keyName="dates" />
                        <FilterDropdown label="Guests" keyName="guests" />
                        <FilterDropdown label="Property" keyName="property" />
                    </div>

                    {/* Scaled Search Button */}
                    <div className="w-auto pl-1 pr-1 lg:pl-2">
                        <button className="bg-[#2b2b2b] hover:bg-black text-white font-medium py-1.5 px-3 sm:py-2 sm:px-5 lg:py-3.5 lg:px-8 rounded-full transition-colors whitespace-nowrap shadow-md text-[8px] sm:text-xs lg:text-base">
                            Search
                        </button>
                    </div>

                </div>
            </div>

            {/* Backdrop to close dropdowns when clicking outside */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={() => setActiveDropdown(null)}
                />
            )}

        </section>
    );
};

export default HeroSection;