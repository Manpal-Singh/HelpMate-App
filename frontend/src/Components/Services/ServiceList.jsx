import { useSelector } from "react-redux";
import Service from "./Service";
import useFetchDataAndSaveDataToStore from "../../hooks/useFetchDataAndSaveDataToStore";

export const ServiceList = () => {
  useFetchDataAndSaveDataToStore();
  const services = useSelector((state) => state.service.serviceData);

  return (
    <div className="flex gap-5 flex-wrap justify-around">
      {services.length > 0 ? (
        services.map((service) => (
          <Service key={service.id} service={service} />
        ))
      ) : (
        <h2>No Services Available</h2>
      )}
    </div>
  );
};
