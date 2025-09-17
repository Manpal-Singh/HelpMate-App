import { ServiceList } from "../Services/ServiceList";
import { howItWorks } from "../../utils/mockData";
import Testimonial from "../Testimonial/Testimonial";
const BodyContent = () => {
  return (
    <>
      <section className="bg-[#e8dae6ff]">
        <div className="container">
          {/* Heading */}
          <h2 className="text-center">Our Services</h2>
          <p
            style={{
              textAlign: "center",
              color: "#555",
              marginBottom: "30px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            At Helpmate, we connect you with trusted professionals for your
            daily needs – from home care to skilled technicians. Explore our
            wide range of services tailored just for you.
          </p>
          <ServiceList />
        </div>
      </section>
      {/* How It Works */}
      <section className="bg-white text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-black text-3xl md:text-4xl font-bold mb-12">
            How It Works
          </h2>

          <div className="grid gap-10 md:grid-cols-3 text-center">
            {howItWorks.map((item) => (
              <div className="text-black backdrop-blur rounded-2xl p-8 shadow-m hover:shadow-l hover:-translate-y-1 transition-all bg-[#f5f5f5]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white text-2xl font-bold">
                  {item.id}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />

      {/* Call to Action */}
      <section className="purpleColorBg ">
        <div className="container flex items-center flex-col ">
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Ready to find help today?
          </h2>
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-3 rounded-xl bg-black text-white"
          >
            Book Now
          </button>
        </div>
      </section>
    </>
  );
};

export default BodyContent;
