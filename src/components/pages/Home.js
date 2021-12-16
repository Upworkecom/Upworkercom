import React from 'react';
import '../../App.css';
import Main from '../Main';
import HeroSection from '../HeroSection';
import Pricing from '../pricing';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Main />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
