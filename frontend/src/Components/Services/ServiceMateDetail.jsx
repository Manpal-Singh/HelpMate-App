import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Heading from "../Heading/Heading";
import BookingModal from "../Auth/BookingModal";

const ServiceMateDetail = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const services = useSelector((state) => state.service.serviceData);

  const service = services.filter(
    (service) => service.serviceName === params.serviceName
  )[0];

  const serviceMate = service?.serviceItemList?.filter(
    (serviceMate) => serviceMate.firstName === params.serviceMateDetail
  )[0];

  const {
    firstName,
    lastName,
    gender,
    image,
    rating,
    address,
    experience,
    description,
    availableSlots,
  } = serviceMate;

  const handleOpen = () => {
    setSelectedItem(serviceMate);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="section py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
          bg-gradient-to-r from-purple-600 to-pink-600 
          text-white font-medium shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-200"
        >
          <ArrowBackIosIcon className="w-5 h-5" />
          Back
        </button>
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="md:w-[40%] w-full">
            <img
              src={image}
              alt={firstName}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-[60%] w-full">
            <Heading
              title={firstName + " " + lastName}
              className="text-left text-3xl md:text-4xl font-extrabold mb-4 text-gray-800"
            />
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 font-medium">
                🧑 Gender: {gender}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700 font-medium">
                📍 {address}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 font-medium">
                💼 {experience} Years Exp
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700 font-medium">
                ⭐ {rating} Rating
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                ⏰ Available Slots
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableSlots.length > 0 &&
                  availableSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2 rounded-xl border border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 hover:shadow-md transition-all text-sm font-medium"
                    >
                      {slot}
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-6">
              <button
                className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition-all"
                onClick={handleOpen}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        open={open}
        handleClose={handleClose}
        selectedItem={selectedItem}
      />
    </section>
  );
};

export default ServiceMateDetail;
