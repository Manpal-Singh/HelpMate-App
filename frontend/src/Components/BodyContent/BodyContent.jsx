import { ServiceList } from "../Services/ServiceList";
import Testimonial from "../Testimonial/Testimonial";
import ReadyToHelp from "../Footer/ReadyToHelp";
import HowItWorks from "../HowItWorks/HowItWorks";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
const BodyContent = () => {
  return (
    <>
      <Carousel />

      <WhatWeOffer />

      <HowItWorks />
      <Testimonial />
      <ReadyToHelp />
    </>
  );
};

export default BodyContent;
