import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// Import your logo image here. Adjust the path to match your project structure.
import logoImg from '../../assets/logo1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated menu items to use section IDs for a single-page landing experience
  const menuItems = [
    { name: 'Home', href: '/capitolcasa/' },
    { name: 'The Host', href: '/capitolcasa/the-host' },
    { name: 'Mi Casa', href: '/capitolcasa/mi-casa' },
    { name: 'Gallery', href: '/capitolcasa/gallery' },
    { name: 'Reviews', href: '/capitolcasa/reviews' },
  ];

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-0 px-0 py-0' : 'top-2 px-4 md:px-10  '
        }`}>
        <div className={`mx-auto transition-all duration-500 ${isScrolled
          ? 'max-w-full rounded-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 py-1'
          : 'max-w-7xl rounded-full bg-white/55 backdrop-blur-md shadow-md py-1'
          }`}>
          <div className={`flex items-center ${isScrolled ? 'px-6 md:px-12 ' : 'px-8  md:px-12'}`}>

            {/* 1. Logo (Updated with Image) */}
            <NavLink to="/capitolcasa/" className="flex items-center gap-3 flex-1">
              <img
                src={logoImg}
                alt="Capitol Casa Fine Homes & Properties"
                className={`transition-all duration-500 object-contain ${isScrolled ? 'h-18 ' : 'w-12 md:w-20'}`}
              />
            </NavLink>

            {/* 2. Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className="text-[17px] uppercase tracking-[0.18em] font-bold transition-all duration-300 relative group whitespace-nowrap text-black hover:text-[#002855]"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-[#8b5a2b] transition-all duration-300 w-0 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}

              {/* Desktop Contact Link */}
              <li>
                <a
                  href="contact-us"
                  className="flex items-center gap-2 text-[17px] uppercase tracking-[0.18em] font-bold transition-all duration-300 group whitespace-nowrap border-l border-gray-200 pl-6 ml-2 text-gray-900 hover:text-[#002855]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#8b5a2b]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Contact Us
                </a>
              </li>
            </ul>

            {/* 3. Mobile Toggle Button */}
            <div className="lg:hidden flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- ULTRA-MODERN MOBILE DRAWER --- */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div
          className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`absolute right-0 top-0  w-[85%] max-w-[400px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden`}>

          {/* Background decorative blurs matched to your logo colors */}
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#fdf5e6]/60 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#002855]/10 rounded-full blur-3xl" />

          <div className="relative h-full flex flex-col p-8">

            <div className="flex justify-between items-start mb-12">

              {/* Mobile Drawer Logo (Updated with Image) */}
              <div className="flex items-center">
                <NavLink to="/capitolcasa/" className="flex items-center gap-3 flex-1">
                  <img
                    src={logoImg}
                    alt="Capitol Casa Fine Homes & Properties"
                    className="h-20 w-auto object-contain"
                  />
                </NavLink>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-400 hover:bg-[#fdf5e6] hover:text-[#8b5a2b] transition-all border border-gray-100 mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li
                    key={item.name}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className={`transform transition-all duration-700 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                  >
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                    >
                      <span className="text-lg font-bold text-gray-700 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all transform">
                        <svg className="w-4 h-4 text-[#8b5a2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </NavLink>
                  </li>
                ))}

                {/* Mobile Contact Link */}
                <li
                  style={{ transitionDelay: `${menuItems.length * 80}ms` }}
                  className={`transform transition-all duration-700 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                >
                  <a
                    href="contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                  >
                    <span className="text-lg font-bold text-gray-700  group-hover:text-white transition-colors">
                      Contact Us
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all transform">
                      <svg className="w-4 h-4 text-[#8b5a2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </li>

              </ul>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;