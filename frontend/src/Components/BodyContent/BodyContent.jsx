import { ServiceList } from "../Services/ServiceList";

const BodyContent = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div
        style={{
          backgroundColor: "#e8dae6ff",
          padding: "50px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Heading */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#555",
              marginBottom: "40px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            At Helpmate, we connect you with trusted professionals for your
            daily needs – from home care to skilled technicians. Explore our
            wide range of services tailored just for you.
          </p>

          {/* Services Cards Grid */}
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
