import React from 'react';
import '../App.css';
import Main from '../components/main/Main';
import HeroSection from '../components/Hero/HeroSection';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Feature from '../components/Feature/Feature';
import Pricing from '../components/pricing/Pricing';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <Main />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
