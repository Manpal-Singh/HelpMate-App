import React from "react";

const Heading = ({ title, discription, className = "" }) => {
  return (
    <div className={`text-center ${className || "mb-8"}`}>
      <h2 className="text-center">{title}</h2>
      <p className="w-[70%] text-center mx-auto ">{discription}</p>
    </div>
  );
};

export default Heading;
