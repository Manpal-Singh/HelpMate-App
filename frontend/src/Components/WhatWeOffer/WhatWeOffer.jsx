import React from "react";
import { whatWeOffer } from "../../utils/mockData";
import Heading from "../Heading/Heading";

const WhatWeOffer = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Heading
        title={"What We Offer"}
        discription={
          "Discover a wide range of personalized home services designed to make your daily life easier, safer, and more comfortable."
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {whatWeOffer.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
