import React from 'react';

// Import your newly created components
import ContactHero from '../../component/ContactPage/ContactHero';
import ContactInfo from '../../component/ContactPage/ContactInfo';
import ContactForm from '../../component/ContactPage/ContactForm';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[#faf4e1]">
      
      {/* Hero Banner Component */}
      <ContactHero />

      {/* Main Content Area */}
      <section className="py-16 md:py-14 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <h4 className="text-[#8a4e15] font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            Plan Your Escape
          </h4>
          <h2 className="text-3xl md:text-5xl font-serif italic text-[#001f3f] leading-tight max-w-2xl mx-auto">
            We would love to host your next family getaway.
          </h2>
        </div>

        {/* Contact Grid Component */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Side: Info */}
          <ContactInfo />
          
          {/* Right Side: Form */}
          <ContactForm />
        </div>
        
      </section>
    </main>
  );
};

export default ContactPage;