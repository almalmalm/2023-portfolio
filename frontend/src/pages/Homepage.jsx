import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <div className="w-screen mx-auto h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Homepage;
