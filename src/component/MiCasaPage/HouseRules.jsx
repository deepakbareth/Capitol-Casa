import React from 'react';
import {
    Clock,
    UserCheck,
    Baby,
    PartyPopper,
    PawPrint,
    CigaretteOff
} from 'lucide-react';

const HouseRules = () => {
    return (
        <section className="max-w-full mx-auto px-4 rounded-xl my-8 sm:px-6 lg:px-6 py-16 text-[#1a2b3c] bg-white">
            <div className=" md:px-9">

                {/* Header */}
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-4xl md:text-5xl font-medium tracking-wide mb-2">
                    House Rules & Policies
                </h2>

                {/* --- TOP LOGISTICS BAR --- */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-12 pb-8 border-b border-gray-200/80">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                            <Clock className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-medium">Check in after 4:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                            <Clock className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-medium">Check out before 10:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                            <UserCheck className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-medium">Minimum age to rent: 25</span>
                    </div>
                </div>

                {/* --- 2x2 POLICIES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">

                    {/* Children */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Baby className="w-6 h-6 stroke-[1.5]" />
                            <h3 className="text-xl font-semibold">Children</h3>
                        </div>
                        <div className="pl-9 space-y-3 opacity-90 text-[16px] leading-relaxed">
                            <p>Children allowed: ages 0-17</p>
                            <p>Near Playground. 2 Rollaways, 2 pak 'n plays.</p>
                        </div>
                    </div>

                    {/* Events */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <PartyPopper className="w-6 h-6 stroke-[1.5]" />
                            <h3 className="text-xl font-semibold">Events</h3>
                        </div>
                        <div className="pl-9 space-y-3 opacity-90 text-[16px] leading-relaxed">
                            <p>No events allowed</p>
                            <p>Daytime only, gatherings of up to 20 people.</p>
                        </div>
                    </div>

                    {/* Pets */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <PawPrint className="w-6 h-6 stroke-[1.5]" />
                            <h3 className="text-xl font-semibold">Pets</h3>
                        </div>
                        <div className="pl-9 space-y-3 opacity-90 text-[16px] leading-relaxed">
                            <p>Pets allowed: dogs (limit 2 total)</p>
                        </div>
                    </div>

                    {/* Smoking */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <CigaretteOff className="w-6 h-6 stroke-[1.5]" />
                            <h3 className="text-xl font-semibold">Smoking</h3>
                        </div>
                        <div className="pl-9 space-y-3 opacity-90 text-[16px] leading-relaxed">
                            <p>Smoking is not permitted</p>
                            <p>Smoking outside only.</p>
                        </div>
                    </div>

                </div>

                {/* --- ADDITIONAL TERMS BOX --- */}
                <div className="bg-[#f8f9fa] border border-gray-200/60 rounded-2xl p-6 md:p-8 space-y-6">
                    <p className="text-[16px] text-gray-800 leading-relaxed font-medium">
                        Inquire first! Reservations must be screened verbally immediately within 24 hours, to ensure size appropriate for house. Head count details required.
                    </p>
                    <p className="text-[16px] text-gray-800 leading-relaxed">
                        Rental Agreement with name, home address, cell, email must be agreed to and signed immediately. Headcount changes only up to 2 weeks prior to arrival.
                    </p>
                    <p className="text-[16px] text-gray-800 leading-relaxed">
                        House Trained Dogs Only. Prof Groomed prior to stay. Signed Pet Permission Form. Cannot be left alone unless in a crate. Crates available. No cats.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HouseRules;