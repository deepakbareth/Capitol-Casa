import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    message: ''
  });

  // State to show a success message when the user hits submit
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a backend or email service
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', dates: '', message: '' });
    }, 4000);
  };

  return (
    <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-serif text-[#001f3f] mb-8">Send an Inquiry</h3>
      
      {isSubmitted ? (
        // Success Message
        <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-3xl font-serif text-[#001f3f] mb-4">Message Sent!</h3>
          <p className="text-gray-600 text-lg max-w-md">
            Thank you for reaching out. Steve will get back to you shortly to help plan your stay.
          </p>
        </div>
      ) : (
        // Contact Form
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 tracking-wider uppercase">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:bg-white focus:border-[#8a4e15] focus:ring-2 focus:ring-[#8a4e15]/20 outline-none transition-all duration-300"
                placeholder="Jane Doe"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 tracking-wider uppercase">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:bg-white focus:border-[#8a4e15] focus:ring-2 focus:ring-[#8a4e15]/20 outline-none transition-all duration-300"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 tracking-wider uppercase">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:bg-white focus:border-[#8a4e15] focus:ring-2 focus:ring-[#8a4e15]/20 outline-none transition-all duration-300"
                placeholder="(555) 000-0000"
              />
            </div>

            {/* Dates Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 tracking-wider uppercase">Desired Dates</label>
              <input 
                type="text" 
                name="dates"
                value={formData.dates}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:bg-white focus:border-[#8a4e15] focus:ring-2 focus:ring-[#8a4e15]/20 outline-none transition-all duration-300"
                placeholder="e.g. Mid-July or specific dates"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 tracking-wider uppercase">Your Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:bg-white focus:border-[#8a4e15] focus:ring-2 focus:ring-[#8a4e15]/20 outline-none transition-all duration-300 resize-none"
              placeholder="Tell us about your group and any special requests..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#001f3f] text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#8a4e15] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;