import React from 'react';

function Playground() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Playground.png"
        alt="Playground Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20  z-10"></div>
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl roboto-condensed font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          SEARCH FOR PLAYGROUNDS!
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md">
          It's not just sports. While you’re playing like a pro, you also start your pathway to earn a Bachelor's degree in 4 years. Pick from over 200+ study programs to work towards your social career!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="px-8 py-4 bg-red-600 hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600 rounded-md text-white font-bold text-lg transition duration-300 shadow-lg">
            FIND THE NEAREST PLAYGROUND
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-red-600 transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Playground;