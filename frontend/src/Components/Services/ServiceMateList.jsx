import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Heading from "../Heading/Heading";

const ServiceMateList = () => {
  const params = useParams();
  const services = useSelector((state) => state.service.serviceData);

  const service = services.filter(
    (service) => service.serviceName === params.serviceName
  )[0];

  const serviceMateList = service?.serviceItemList;

  return (
    <section className="">
      <Heading
        title={`OUR ${params.serviceName.toUpperCase()}`}
        discription="Prepares tasty and hygienic home-cooked meals with love and care."
        className="py-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      />
      <div className="container">
        <div className="flex  flex-wrap justify-center gap-8 p-6 mt-5 mb-5">
          {serviceMateList.length > 0 &&
            serviceMateList.map((serviceMate) => (
              <div className="max-w-[30%] mx-auto" key={serviceMate.id}>
                <div className="flex bg-white flex-col rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                  <div className="w-[100%] overflow-hidden">
                    <img
                      src={serviceMate.image}
                      alt={serviceMate.firstName}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="w-[100%] p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {`${serviceMate.firstName} ${serviceMate.lastName}`}
                      </h2>
                      <p className="text-gray-600 mt-2 text-sm">
                        {serviceMate.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700 font-medium">
                        📍 {serviceMate.address}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 font-medium">
                        💼 {serviceMate.experience}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700 font-medium">
                        ⭐ {serviceMate.rating}
                      </span>
                    </div>

                    <div className="mt-5 flex justify-start">
                      <Link
                        to={`/services/service/${service.serviceName}/${serviceMate.firstName}`}
                        className="px-4 py-2 rounded-lg bg-purple-600 text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMateList;
