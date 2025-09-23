import React from "react";
import Heading from "../Heading/Heading";

import { ourCoreValues } from "../../utils/mockData";

const OurCoreValues = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <Heading
        title={"Our Core Values"}
        discription={
          "The principles that guide everything we do — built on trust, care, and excellence to serve you better every day."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
        {ourCoreValues.map((value, idx) => {
          const IconComponent = value.icon;
          return (
            <div
              key={idx}
              className="group bg-gradient-to-tr from-white to-indigo-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transform transition-transform">
                <IconComponent fontSize="large" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-indigo-700 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {value.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurCoreValues;
