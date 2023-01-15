import React from 'react';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Facebook from '../assets/facebook.svg';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
import Telegram from '../assets/telegram.svg';

const Footer = () => {
  return (
    <div className="flex items-center flex-col gap-2 mt-16 mx-4 sm:justify-between sm:flex-row sm:mx-8 lg:mx-16 mb-2 sm:mb-4">
      <div className="flex gap-2 justify-center sm:gap-4">
        <a
          href="https://www.instagram.com/lkalinindev/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <img src={Instagram} alt="The instagram link" />
        </a>
        <a
          href="https://www.linkedin.com/in/lkalinin/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <img src={Linkedin} alt="The linkedin link" />
        </a>
        <a
          href="https://www.facebook.com/lkalinindev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <img src={Facebook} alt="The facebook link" />
        </a>
        <a
          href="https://github.com/almalmalm"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <img src={Github} alt="The github link" />
        </a>
        <a
          href="https://twitter.com/l_kalinin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <img src={Twitter} alt="The twitter link" />
        </a>
        <a
          href="https://t.me/almost0ne"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <img src={Telegram} alt="The telegram link" />
        </a>
      </div>
      <div className="text-xs flex justify-center gap-2 items-center mt-4 mb-2 sm:text-sm">
        <div>last updated 01,2023</div>
        <div className="border border-black py-1 px-2 rounded">
          by Lev Kalinin
        </div>
      </div>
    </div>
  );
};

export default Footer;
