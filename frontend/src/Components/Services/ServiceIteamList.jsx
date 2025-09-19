import React from "react";
import Heading from "../Heading/Heading";
import { serviceData } from "../../utils/mockData";
import { useParams } from "react-router-dom";

export default function ServiceIteamList({}) {
  const params = useParams();
  const serviceDataList = serviceData.filter(
    (service) => service.serviceName === params.name
  );

  console.log(serviceDataList.ServiceIteamList);

  return (
    <section className="">
      <Heading
        title={`OUR ${params.name.toLocaleUpperCase()}`}
        discription={
          " Prepares tasty and hygienic home-cooked meals with love and care."
        }
        className="py-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      />
      <div className="flex  flex-wrap justify-center gap-4 p-6">
        {serviceDataList[0].serviceItemList.map((item) => (
          <div className="max-w-xl mx-auto">
            <div className="flex bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
              <div className="w-1/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.firstName}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="w-2/3 p-6 flex flex-col justify-between">
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

                {/* View Details Button */}
                <div className="mt-5 flex justify-start">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:from-purple-600 hover:to-pink-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
