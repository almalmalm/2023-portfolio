import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Skillspage = () => {
  return (
    <div className="w-screen mx-auto h-screen flex flex-col justify-between">
      <Header />
      <div className="text-sm mt-2 mx-4 sm:text-base sm:mt-16 sm:mx-8 lg:mx-16 grow">
        <h1 className="font-bold text-base sm:text-3xl mt-16 mb-4">Skills</h1>
        <ol className="flex gap-4 flex-wrap">
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Html</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Css</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">JavaScript</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">TypeScript</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">React</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">RTK</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">RTK Query</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Material UI</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Node.js</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Figma</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Axios</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Express</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Postman</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">MongoDB</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Mongoose</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">React-router</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Sass</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Less</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Tailwindcss</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Npm</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Bootstrap</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Cypress</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Playwright</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Three.js</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">
            React-three-fiber
          </li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Git</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Vite</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">BEM</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Github</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Gitlab</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Https</li>
          <li className="bg-[#ffd6bf] rounded-md py-2 px-4">Cors</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Skillspage;
