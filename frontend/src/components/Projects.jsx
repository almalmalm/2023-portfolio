import React from 'react';

const Projects = () => {
  return (
    <div className="my-16">
      <h1 className="font-bold text-base sm:text-3xl">Projects</h1>
      <div className="mt-4 flex gap-4 flex-col">
        <a
          href="https://byte-todo-lkalinin.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#ffd6bf] rounded-md py-2 px-4"
        >
          Simple todo app
        </a>
        <a
          href="https://lkalinin-landing-01.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#ffd6bf] rounded-md py-2 px-4"
        >
          Landing for french fashion store
        </a>
        <a
          href="https://maria-psycholog.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#ffd6bf] rounded-md py-2 px-4"
        >
          maria-psycholog
        </a>
      </div>
    </div>
  );
};

export default Projects;
