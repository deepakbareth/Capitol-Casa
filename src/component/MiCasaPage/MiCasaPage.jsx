import React from 'react';
import { Anchor, Heart, MapPin } from 'lucide-react';
import MiCasaHero from './MiCasaHero';
import Amenities from './Amenities';
import AccommodationDetails from './AccommodationDetails';
import VillaSpaces from './VillaSpaces';
import HouseRules from './HouseRules';


const MiCasaPage = () => {
  return (
    <>
      <MiCasaHero />
      <Amenities />
      <AccommodationDetails />
      <VillaSpaces />
      <HouseRules />

    </>
  );
};

export default MiCasaPage;