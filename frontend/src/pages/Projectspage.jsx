import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import TextSphere from '../components/TextSphere';

const Projectspage = () => {
  return (
    <div className="w-screen mx-auto h-screen">
      <Header />
      <div className="sm:flex justify-between text-sm mt-2 mx-4 sm:text-base sm:mt-4 sm:mx-8 lg:mx-16">
        <Projects />
        <TextSphere />
      </div>
      <Footer />
    </div>
  );
};

export default Projectspage;
