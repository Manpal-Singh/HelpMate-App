import React from "react";
import ServiceBox from "./ServiceBox";
import Cook from "../../assets/images/cook.jpg";
import Maid from "../../assets/images/maid.jpg";
export const ServiceList = () => {
  // Featured Services
  const featuredServices = [
    {
      id: "maid",
      title: "Top Rated Maids",
      description: "Experienced maids trusted by 500+ families.",
      image: "maid.jpg",
    },
    {
      id: "cook",
      title: "Best Cooks This Week",
      description: "Delicious meals from skilled cooks.",
      image: "maid.jpg",
    },
    {
      id: "plumber",
      title: "Expert Plumbers",
      description: "Quick fixes for all your water & pipe issues.",
      image: "maid.jpg",
    },
  ];
  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya, Delhi",
      text: "Helpmate made my life easier! The cook I hired was amazing.",
    },
    {
      id: 2,
      name: "Ramesh, Mumbai",
      text: "Found a trustworthy maid within a day. Highly recommended!",
    },
  ];
  return (
    <>
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

      {/* Featured Services */}
      <section style={{ padding: "50px 20px", background: "#f9f9f9" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "30px",
          }}
        >
          Featured Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {featuredServices.map((service) => (
            <div
              key={service.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <h3 style={{ margin: "15px 0 8px" }}>{service.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {service.description}
              </p>
              <button
                onClick={() => navigate(`/services/${service.id}`)}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>How It Works</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3>1. Search Service</h3>
            <p>Find the service you need quickly and easily.</p>
          </div>
          <div>
            <h3>2. Choose Professional</h3>
            <p>Select the best professional based on ratings & reviews.</p>
          </div>
          <div>
            <h3>3. Book & Relax</h3>
            <p>Book instantly and enjoy peace of mind at home.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "50px 20px", background: "#f9f9f9" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "30px",
          }}
        >
          What Our Customers Say
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                background: "#fff",
              }}
            >
              <p>"{t.text}"</p>
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          background: "#007bff",
          color: "white",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Ready to find help today?
        </h2>
        <button
          onClick={() => navigate("/services")}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </section>
    </>
  );
};
