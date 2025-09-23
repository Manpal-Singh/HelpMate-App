import React from "react";

const Banner = ({ title, discription }) => {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg max-w-2xl mx-auto">{discription}</p>
    </section>
  );
};

export default Banner;
