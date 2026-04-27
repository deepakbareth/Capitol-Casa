import React from 'react';

// Import your newly created components 
// (Make sure the folder paths match where you saved them!)
import AboutHero from '../../component/AboutUsPage/AboutHero';
import AboutStory from '../../component/AboutUsPage/AboutStory';
import AboutAmenities from '../../component/AboutUsPage/AboutAmenities';
import AboutFloorPlan from '../../component/AboutUsPage/AboutFloorPlan';
import AboutDetails from '../../component/AboutUsPage/AboutDetails';

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-[#faf4e1]">
      <AboutHero />
      <AboutStory />
      <AboutAmenities />
      <AboutFloorPlan />
      <AboutDetails />
    </main>
  );
};

export default AboutUsPage;