import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';

const Projectspage = () => {
  return (
    <div className="w-screen mx-auto h-screen flex flex-col justify-between">
      <Header />
      <div className="sm:flex justify-between text-sm mt-2 mx-4 sm:text-base sm:mt-16 sm:mx-8 lg:mx-16 grow">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Projectspage;
