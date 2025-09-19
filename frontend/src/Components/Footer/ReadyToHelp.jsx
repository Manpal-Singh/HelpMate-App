import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";

const ReadyToHelp = () => {
  const navigate = useNavigate();

  return (
    <section className="purpleColorBg section">
      <div className="container flex items-center flex-col">
        <Heading
          title="Ready to find help today?"
          className="mb-0 text-white"  // <--- override/extend styles here
        />
        <button
          onClick={() => navigate("/services")}
          className="px-8 py-3 rounded-xl bg-black text-white"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default ReadyToHelp;
