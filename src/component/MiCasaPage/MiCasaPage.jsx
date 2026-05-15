import React from 'react';
import { Anchor, Heart, MapPin } from 'lucide-react';
import MiCasaHero from './MiCasaHero';
import Amenities from './Amenities';
import AccommodationDetails from './AccommodationDetails';
import VillaSpaces from './VillaSpaces';
import HouseRules from './HouseRules';
import HeroSection from './HeroSection';
import ImportantInfo from './ImportantInfo';
import ExploreArea from './ExploreArea';


const MiCasaPage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <MiCasaHero />
      <Amenities />
      <AccommodationDetails />
      <VillaSpaces />
      <HouseRules />
      <ImportantInfo />
      <ExploreArea />

    </>
  );
};

export default MiCasaPage;