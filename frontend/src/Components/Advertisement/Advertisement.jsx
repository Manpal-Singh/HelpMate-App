import React, { useContext } from "react";
import adImg1 from "../../assets/images/ad1.jpg";
import StaticContext from "../../utils/StaticContext";

const SideBar = () => {
  const { isScrroll } = useContext(StaticContext);
  console.log(isScrroll);

  return (
    <div className="w-[20%] p-2 space-y-4 float-right">
      <img
        src={adImg1}
        alt="Ad 1"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default SideBar;
