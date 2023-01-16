import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from 'react';
import Arrow from '../assets/arrow.svg';

function Model() {
  const gltf = useLoader(GLTFLoader, '/3d/scene.gltf');
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.001;
  });

  return <primitive ref={meshRef} object={gltf.scene} />;
}

const Hero = () => {
  return (
    <div className="text-sm mx-4 sm:text-base sm:mx-8 lg:mx-16 lg:flex lg:mt-16 lg:justify-between">
      <div className="lg:w-[60%]">
        <h1 className="text-base font-bold mt-16 sm:text-2xl lg:text-3xl">
          Hey, I’m Leo.
          <br />
          Front end developer.
        </h1>
        <div className="my-4">
          I am a highly motivated and multitalented individual with extensive
          experience in UI/UX design, full-stack development, quality assurance
          testing. With my diverse set of skills and experience, I am confident
          in my ability to deliver exceptional results for any project.
        </div>
        <div className="sm:flex sm:gap-4">
          <div className="rounded-md border border-black py-1 px-2 w-fit my-4 sm:py-2 sm:px-4">
            1 successful projects
          </div>
          <a href="/projects" className="w-fit flex items-center gap-2">
            View projects
            <img src={Arrow} alt="The arrow icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <div className="lg:h-[424px] lg:w-[424px]">
          <Canvas
            camera={{
              fov: 35,
              zoom: 0.8,
              near: 1,
              far: 1000,
              position: [0, 20, 30],
            }}
          >
            <Stage preset="rembrandt" intensity={1} environment="city">
              <OrbitControls />
              <Model />
            </Stage>
          </Canvas>
        </div>
        <a
          href="https://www.buymeacoffee.com/lkalinin"
          className="rounded-md bg-[#ffd6bf] py-1 px-2 mt-4 sm:py-2 sm:px-4"
        >
          Buy me a coffee
        </a>
      </div>
    </div>
  );
};

export default Hero;
