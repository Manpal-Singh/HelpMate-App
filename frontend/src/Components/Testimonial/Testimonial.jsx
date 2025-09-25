import Slider from "react-slick";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Heading from "../Heading/Heading";
import { testimonials } from "../../utils/mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";

const Testimonial = () => {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-[-30px] z-20 cursor-pointer"
      onClick={onClick}
    >
      <ArrowCircleRightIcon className="arrowCircleRightIcon" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-[-30px] z-20 cursor-pointer"
      onClick={onClick}
    >
      <ArrowCircleLeftIcon className="arrowCircleLeftIcon" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-16 relative section">
      <div className="container mx-auto px-6 relative">
        <Heading
          title="What Our Customers Say"
          discription="Discover how Helpmate has made a difference in our customers’ lives.
          Real stories from real people who trusted us with their daily needs."
        />

        <div className="w-[80%] mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-8 pb-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-l transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">“{testimonial.text}”</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
