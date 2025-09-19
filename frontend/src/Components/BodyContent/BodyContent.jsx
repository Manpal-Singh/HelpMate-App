import { ServiceList } from "../Services/ServiceList";
import Testimonial from "../Testimonial/Testimonial";
import ReadyToHelp from "../Footer/ReadyToHelp";
import HowItWorks from "../HowItWorks/HowItWorks";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";
const BodyContent = () => {
  return (
    <>
      <Carousel />
      <section className="bg-[#e8dae6ff] section">
        <div className="container">
          <Heading
            title="Our Services"
            discription=" At Helpmate, we connect you with trusted professionals for your
            daily needs – from home care to skilled technicians. Explore our
            wide range of services tailored just for you."
          />
          <ServiceList />
        </div>
      </section>

      <Testimonial />

      <HowItWorks />
      <ReadyToHelp />
    </>
  );
};

export default BodyContent;
