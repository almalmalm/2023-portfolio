import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Skillspage = () => {
  return (
    <div className="w-screen mx-auto h-screen flex flex-col justify-between">
      <Header />
      <div className="text-sm mt-2 mx-4 sm:text-base sm:mt-16 sm:mx-8 lg:mx-16 grow">
        <h1 className="font-bold text-base sm:text-3xl">Skills</h1>
        <ol>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Figma</li>
          <li>Axios</li>
          <li>Express</li>
          <li>Postman</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>React-router</li>
          <li>Sass</li>
          <li>Less</li>
          <li>Tailwindcss</li>
          <li>Npm</li>
          <li>Bootstrap</li>
          <li>Cypress</li>
          <li>Playwright</li>
          <li>Three.js</li>
          <li>React-three-fiber</li>
        </ol>
      </div>

      <Footer />
    </div>
  );
};

export default Skillspage;
