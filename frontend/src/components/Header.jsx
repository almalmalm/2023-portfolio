import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between text-sm mt-2 mx-4 sm:text-base sm:mt-4 sm:mx-8 lg:mx-16">
      <a
        href="/"
        className="font-bold flex items-center bg-[#FFD6Bf] rounded-md py-1 px-2"
      >
        lkalinin
      </a>
      <div className="flex gap-4 items-center sm:gap-8">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </div>
    </div>
  );
};

export default Header;
