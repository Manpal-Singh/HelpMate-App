import React from "react";
import ServiceBox from "./ServiceBox";
import Cook from "../../assets/images/cook.jpg";
import Maid from "../../assets/images/maid.jpg";
export const ServiceList = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-around">
      {" "}
      <ServiceBox
        icon={Cook}
        title={"Cook"}
        description={"Prepares tasty and hygienic home-cooked meals."}
      />
      <ServiceBox
        icon={Maid}
        title={"Maid"}
        description={"Reliable help for home cleaning and chores."}
      />
      <ServiceBox
        icon={Cook}
        title={"Cook"}
        description={"Prepares tasty and hygienic home-cooked meals."}
      />
      <ServiceBox
        icon={Cook}
        title={"Maid"}
        description={"Reliable help for home cleaning and chores."}
      />
      <ServiceBox
        icon={Maid}
        title={"Cook"}
        description={"Prepares tasty and hygienic home-cooked meals."}
      />
      <ServiceBox
        icon={Cook}
        title={"Cook"}
        description={"Prepares tasty and hygienic home-cooked meals."}
      />
    </div>
  );
};
