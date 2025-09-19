import React from "react";
import { Link } from "react-router-dom";

const ServiceBox = ({ title, description, image, serviceName }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-[30%] flex flex-col items-center text-center hover:shadow-xl transition-shadow text-black">
      <div className="text-4xl mb-3">
        <img src={image} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <Link
        to={`services/${serviceName}`}
        className="mt-4 purpleColorBg w-full text-white px-4 py-2 rounded-lg"
      >
        Details
      </Link>
    </div>
  );
};

export default ServiceBox;

