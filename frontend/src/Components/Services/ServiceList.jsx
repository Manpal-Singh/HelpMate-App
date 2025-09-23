import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceBox from "./ServiceBox";
import { setService } from "../../store/serviceSlice";

export const ServiceList = () => {
  const dispatch = useDispatch();
  const serviceData = useSelector((state) => state.service.serviceData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServiceData();
      dispatch(setService(data));
    };
    fetchData();
  }, []);

  const getServiceData = async () => {
    const data = await fetch(
      "https://mocki.io/v1/4331fb8c-0116-436e-9a2e-dbf2b768ed95",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_TOKEN_HERE",
          Accept: "application/json",
        },
      }
    );
    return await data.json();
  };

  return (
    <>
      <div className="flex gap-5 flex-wrap justify-around">
        {serviceData.length > 0 ? (
          serviceData?.map((service) => (
            <ServiceBox
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              id={service.id}
              serviceName={service.serviceName}
            />
          ))
        ) : (
          <h2>No Services Available</h2>
        )}
      </div>
    </>
  );
};
