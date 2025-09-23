import Banner from "../Components/Banner/Banner";
import ReadyToHelp from "../Components/Footer/ReadyToHelp";
import OurJournry from "../Components/OurJourney/OurJournry";
import OurCoreValues from "../Components/OurValues&Mission/OurCoreValues";
import OurMission from "../Components/OurValues&Mission/OurMission";
import Team from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <Banner
        title="About HelpMate"
        discription=" Your trusted assistant for smarter productivity and effortless task
        management."
      />
      <OurMission />

      <OurCoreValues />

      <Team />

      <OurJournry />
      <Testimonial />

      <ReadyToHelp />
    </div>
  );
};

export default About;
