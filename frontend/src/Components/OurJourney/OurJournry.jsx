import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import Heading from "../Heading/Heading";

const OurJourney = () => {
  const journey = [
    { year: "2023", event: "HelpMate idea was born." },
    { year: "2024", event: "Beta version launched with first 1,000 users." },
    {
      year: "2025",
      event: "HelpMate 2.0 rolled out with AI-powered assistance.",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 overflow-hidden">
      <Heading
        title="Our Journey"
        discription="From humble beginnings to becoming a trusted partner in everyday services, our journey is shaped by passion, dedication, and the trust of our customers."
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-indigo-200 transform -translate-x-1/2 rounded-full"></div>

        {journey.map((item, idx) => (
          <div key={idx} className="relative mb-3 flex w-full">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-lg font-semibold z-10">
              {idx + 1}
            </div>

            {/* Content box */}
            <div
              className={`bg-white border border-gray-100 shadow-md rounded-2xl p-6 w-5/12 transition transform hover:-translate-y-2 hover:shadow-xl ${
                idx % 2 === 0 ? "mr-auto text-left" : "ml-auto text-left"
              }`}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {item.year}
              </h3>
              <p className="text-gray-600">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurJourney;
