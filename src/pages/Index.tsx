
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Details from '@/components/Details';
import RSVP from '@/components/RSVP';
import Gallery from '@/components/Gallery';
import Registry from '@/components/Registry';
import Accommodations from '@/components/Accommodations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OurStory />
      <Details />
      <RSVP />
      <Gallery />
      <Registry />
      <Accommodations />
      <Footer />
    </div>
  );
};

export default Index;
