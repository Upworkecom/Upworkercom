import React from 'react';
import '../../App.css';
import Main from '../main/Main';
import HeroSection from '../Hero/HeroSection';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
