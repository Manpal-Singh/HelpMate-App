import Banner from "../Components/Banner/Banner";
import ReadyToHelp from "../Components/Footer/ReadyToHelp";
import Heading from "../Components/Heading/Heading";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import { ServiceList } from "../Components/Services/ServiceList";
import WhyChooseHelpMate from "../Components/WhyChooseHelpMate/WhyChooseHelpMate";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Banner
        title="Our Services"
        discription="   Trusted help for every household need — from cooking and cleaning to
          repairs and care."
      />
      <section className="bg-white section">
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

      <WhyChooseHelpMate />

      <HowItWorks />
      <ReadyToHelp />
    </div>
  );
}
