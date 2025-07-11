import React from 'react';
import {Link} from 'react-router-dom'
function Hero() {
  return (
<div className="relative w-full  h-[calc(100vh-5rem)] ">
      {/* Background Image */}
      <img
        src="/images/Hero.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-blur bg-opacity-40"></div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-24 max-w-3xl text-left z-10">
        <h1 className="text-7xl roboto-condensed font-bold mb-6 text-white leading-tight">
          YOUR DREAM <span className="inline-block">IS OUR</span><br />MOTIVATION
        </h1>
        <p className="text-lg text-white mb-8 max-w-xl">
          PLAY LIKE A PRO AND GET YOUR DEGREE. THIS IS COLLEGE SPORTS. WELCOME TO THE PLACE TO ACHIEVE YOUR DREAM OF STUDYING AND PLAYING AT AN AMERICAN UNIVERSITY.
        </p>
        <div className="flex items-center gap-8">
          <button className="px-8 py-4 bg-red-600 hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600 rounded-md text-white font-bold text-lg transition duration-300 shadow-lg">
            FIND THE PERFECT MATCH
          </button>
          <Link to="/explore" className="text-white hover:text-red-600 text-lg font-semibold hover:underline flex items-center">
            EXPLORE <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
