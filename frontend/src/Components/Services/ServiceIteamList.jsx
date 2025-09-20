import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Heading from "../Heading/Heading";

export default function ServiceIteamList({}) {
  const params = useParams();
  const serviceData = useSelector((state) => state.service.serviceData);

  const serviceDataList = serviceData.filter(
    (service) => service.serviceName === params.name
  );

  return (
    <section className="">
      <Heading
        title={`OUR ${params.name.toUpperCase()}`}
        discription="Prepares tasty and hygienic home-cooked meals with love and care."
        className="py-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      />
      <div className="container">
        <div className="flex  flex-wrap justify-center gap-8 p-6 mt-5 mb-5">
          {serviceDataList.length > 0 &&
            serviceDataList[0].serviceItemList.length > 0 &&
            serviceDataList[0].serviceItemList.map((item) => (
              <div className="max-w-[30%] mx-auto">
                <div className="flex bg-white flex-col rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                  <div className="w-[100%] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.firstName}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="w-[100%] p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {item.firstName + " " + item.lastName}
                      </h2>
                      <p className="text-gray-600 mt-2 text-sm">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700 font-medium">
                        📍 {item.address}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 font-medium">
                        💼 {item.experience}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700 font-medium">
                        ⭐ {item.rating}
                      </span>
                    </div>

                    <div className="mt-5 flex justify-start">
                      <Link
                        to={item.firstName}
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
}
