
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import OurStory from '@/components/OurStory';
import Details from '@/components/Details';
import RSVP from '@/components/RSVP';
import Gallery from '@/components/Gallery';
import Guestbook from '@/components/Guestbook';
import Registry from '@/components/Registry';
import Accommodations from '@/components/Accommodations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <OurStory />
      <Details />
      <RSVP />
      <Gallery />
      <Guestbook />
      <Registry />
      <Accommodations />
      <Footer />
    </div>
  );
};

export default Index;
