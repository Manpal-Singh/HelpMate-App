import React from "react";
import ServiceBox from "./ServiceBox";
import { serviceData } from "../../utils/mockData";

export const ServiceList = () => {
  return (
    <>
      <div className="flex gap-5 flex-wrap justify-around">
        {serviceData.map((service) => (
          <ServiceBox
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            id={service.id}
            serviceName={service.serviceName}
          />
        ))}
      </div>
    </>
  );
};
