import React from "react";

const ServiceBox = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-[30%] flex flex-col items-center text-center hover:shadow-xl transition-shadow text-black">
      <div className="text-4xl mb-3">
        <img src={icon} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <button className="mt-4 bg-[#c718c5] w-full text-white px-4 py-2 rounded-lg hover:bg-black transition cursor-pointer">
        Details
      </button>
    </div>
  );
};

export default ServiceBox;
