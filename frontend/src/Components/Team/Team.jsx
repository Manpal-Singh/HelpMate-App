import React from "react";
import { teamData } from "../../utils/mockData";
import Heading from "../Heading/Heading";
const Team = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <Heading
        title=" Meet the Team"
        discription="Behind every great service is a great team. Meet the friendly faces who make Helpmate a trusted choice for your daily need"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="bg-[#ffe7ff]  rounded-2xl shadow-md p-6 text-center border-t-4 border-t-[#c518c3]"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
