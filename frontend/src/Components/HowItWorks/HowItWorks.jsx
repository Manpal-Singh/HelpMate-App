import React from "react";
import Heading from "../Heading/Heading";
import { howItWorks } from "../../utils/mockData";
const HowItWorks = () => {
  return (
    <section className="bg-white text-white py-16 section">
      <div className="container mx-auto px-6 text-black">
        <Heading
          title="How It Works"
          discription="Getting help is simple with Helpmate. Just follow these easy steps to 
  connect with trusted professionals and get the support you need."
        />

        <div className="grid gap-10 md:grid-cols-3 text-center">
          {howItWorks.map((item) => (
            <div
              key={item.id}
              className="text-black backdrop-blur rounded-2xl p-8 shadow-m hover:shadow-l hover:-translate-y-1 transition-all bg-[#f5f5f5]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white text-2xl font-bold">
                {item.id}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
