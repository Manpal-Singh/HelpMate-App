import React from "react";
import Heading from "../Heading/Heading";
import { whyChooseHelpMate } from "../../utils/mockData";

const WhyChooseHelpMate = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
      <Heading
        title="Why Choose HelpMate?"
        discription="Helpmate stands out with reliable, skilled, and caring professionals who bring trust, convenience, and quality to your home every day."
      />

      <div className="flex flex-col gap-8 max-w-6xl mx-auto mt-12">
        {whyChooseHelpMate.map((benefit, idx) => {
          const IconComponent = benefit.icon;
          return (
            <div
              key={idx}
              className="group flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transform transition-transform">
                <IconComponent fontSize="large" />
              </div>
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {benefit.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseHelpMate;
