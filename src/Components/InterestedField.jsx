import React from 'react';

const fields = [
  {
    title: "MEN'S SOCCER",
    image: "/images/soccer-men.png",
  },
  {
    title: "FIELD HOCKEY",
    image: "/images/field-hockey.png",
  },
  {
    title: "WOMEN'S SOCCER",
    image: "/images/soccer-women.png",
  },
];

function InterestedField() {
  return (
    <section
      className="w-full min-h-screen py-16 flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Playground.png')" }}
    >
      <div className="absolute inset-0 bg-white/70 z-0" />
      <h2 className="relative z-10 text-3xl md:text-4xl roboto-condensed font-extrabold text-black mb-14 text-center tracking-tight">
        SEARCH INTERESTED FIELDS
      </h2>
      <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl px-4">
        {fields.map((field, idx) => (
          <div
            key={idx}
            className="group relative w-full md:w-1/3 h-[400px] rounded-lg overflow-hidden shadow-xl flex flex-col justify-end"
          >
            <img
              src={field.image}
              alt={field.title}
              className="w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
            <div className="relative z-20 flex flex-col justify-end items-center h-full w-full">
              <div className="flex-1 flex items-center justify-center w-full">
                <h3 className="text-2xl md:text-3xl roboto-condensed font-bold text-white mt-[70%] align-text-bottom">
                  {field.title}
                </h3>
              </div>
              <button className="w-full py-3 bg-red-600 hover:bg-black/30 hover:border-2 hover:border-white hover:text-white hover:rounded-b-xl text-white font-bold text-base transition duration-300">
                SEE MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InterestedField;
