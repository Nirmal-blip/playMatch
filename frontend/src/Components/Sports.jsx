import React from 'react';

const sportsData = [
  {
    title: "MEN'S SOCCER",
    highlight: "MEN'S",
    image: "/images/soccer-men.png", // Replace with your actual image paths
    description: 'Seamlessly work with your partners, vendors.',
  },
  {
    title: "FIELD HOCKEY",
    highlight: "FIELD",
    image: "/images/field-hockey.png",
    description: 'Seamlessly work with your partners, vendors.',
  },
  {
    title: "WOMEN'S SOCCER",
    highlight: "WOMEN'S",
    image: "/images/soccer-women.png",
    description: 'Seamlessly work with your partners, vendors.',
  },
];

function Sports() {
  return (
    <section className="bg-[#fafafa] py-16 w-full flex flex-col items-center">
      <h2 className="text-4xl roboto-condensed font-bold text-black mb-4 text-center">PICK YOUR SPORT</h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
        Join these athletes in your journey to play college sports. Lorem dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-6xl mb-12">
        {sportsData.map((sport, idx) => (
          <div key={idx} className="flex flex-col items-center w-full md:w-1/3">
            {/* Stacked Images */}
            <div className="relative w-64 h-72 mb-6 ">
              <div className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style={{zIndex: 1, background: '#e5e5e5', transform: 'translate(24px, 24px)'}}></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style={{zIndex: 2, background: '#d4d4d4', transform: 'translate(12px, 12px)'}}></div>
              <img
                src={sport.image}
                alt={sport.title}
                className="relative w-full h-full hover-transition hover:ease-in-out hover:duration-300 hover:scale-110 object-cover rounded-lg shadow-xl z-10"
                style={{zIndex: 3}}
              />
            </div>
            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mb-4 mt-8">
              {[0,1,2,3,4].map(dot => (
                <span
                  key={dot}
                  className={`w-2 h-2 rounded-full ${dot===2 ? 'bg-gray-800' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
            {/* Sport Title */}
            <h3 className="text-xl roboto-condensed font-bold mb-2 text-center">
              <span className="text-red-600">{sport.highlight}</span>{' '}
              {sport.title.replace(sport.highlight, '')}
            </h3>
            {/* Description */}
            <p className="text-gray-700 mb-6 text-center text-base max-w-xs">{sport.description}</p>
            {/* Button */}
            <button className="px-10 py-3 bg-red-600 hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600 rounded-md text-white font-bold text-base transition duration-300">
              START HERE
            </button>
          </div>
        ))}
      </div>
      <a href="#" className="text-black roboto-condensed font-semibold text-lg  hover:text-red-600 hover:underline flex items-center gap-2">
        SEE MORE <span>→</span>
      </a>
    </section>
  );
}

export default Sports;