import React, { Suspense, lazy } from 'react';

// --- Premium Skeleton Loader Component ---
const PageSkeleton = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center animate-pulse">
        
        {/* Text Skeleton */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Eyebrow skeleton */}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-stone-200"></div>
            <div className="h-4 w-32 bg-stone-200 rounded-full"></div>
          </div>
          
          {/* Heading skeleton */}
          <div className="space-y-4 mb-4">
            <div className="h-12 w-4/5 bg-stone-200 rounded-xl"></div>
            <div className="h-12 w-3/5 bg-stone-200 rounded-xl"></div>
          </div>
          
          {/* Paragraph skeleton */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-stone-100 rounded-full"></div>
            <div className="h-4 w-11/12 bg-stone-100 rounded-full"></div>
            <div className="h-4 w-4/5 bg-stone-100 rounded-full"></div>
          </div>

          {/* Button/Action skeleton */}
          <div className="h-14 w-40 bg-stone-200 rounded-full mt-4"></div>
        </div>

        {/* Image/Card Skeleton */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[400px] lg:h-[600px] bg-stone-200/80 rounded-[2rem]"></div>
        </div>
        
      </div>
    </section>
  );
};


// --- Your Existing Imports (Keep Banner normal, Lazy load the rest) ---
import Banner from "../component/Home/Banner";

const AboutProperty = lazy(() => import("../component/Home/AboutProperty"));
const InteriorDesignSection = lazy(() => import("../component/InteriorDesignSection/InteriorDesignSection"));
const PropertySpecs = lazy(() => import("../component/Home/PropertySpecs"));
const BookingSection = lazy(() => import("../component/Home/BookingSection/BookingSection"));
const Attractions = lazy(() => import("../component/Home/Attractions/Attractions"));
const Testimonials = lazy(() => import("../component/Home/Testimonials/Testimonials"));
const LocationDetails = lazy(() => import("../component/Home/LocationDetails"));
const ContactBanner = lazy(() => import("../component/Home/ContactBanner"));
// const Neighborhood = lazy(() => import("../component/Home/Neighborhood"));


function Home() {
  return (
    <>
      {/* Renders immediately for better initial load */}
      <Banner />

      {/* Suspense boundary now uses the beautiful PageSkeleton */}
      <Suspense fallback={<PageSkeleton />}>
        <AboutProperty />
        <InteriorDesignSection />
        <PropertySpecs />
        <BookingSection />
        <Attractions />
        <Testimonials />
        <LocationDetails />
        <ContactBanner />
        {/* <Neighborhood /> */}
      </Suspense>
    </>
  );
}

export default Home;