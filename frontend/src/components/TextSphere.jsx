import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const TextSphere = () => {
  let radius = 150;
  if (window.innerWidth > 1024) {
    radius = 300;
  }
  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const texts = [
        '3D',
        'JavaScript',
        'CSS',
        'HTML',
        'Three.js',
        'React',
        'Postman',
        'MongoDB',
        'Express',
        'Node',
        'Tailwind',
        'Sass',
        'Npm',
        'Git',
        'Playwright',
        'Cypress',
        'Figma',
        'UI/UX',
      ];
      const options = {
        radius: radius,
      };
      TagCloud(container, texts, options);
    };
  }, [radius]);

  return <span className="tagcloud lowercase flex justify-center"></span>;
};

export default TextSphere;
