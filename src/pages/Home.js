import React from 'react';
import '../App.css';
import Main from '../components/main/Main';
import HeroSection from '../components/Hero/HeroSection';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';


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
