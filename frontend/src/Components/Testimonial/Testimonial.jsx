import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../utils/mockData";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Heading from "../Heading/Heading";

const Testimonial = () => {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-[-30px] z-20 cursor-pointer"
      onClick={onClick}
    >
      <ArrowCircleRightIcon style={{ fontSize: 50, color: "#c718c5" }} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-[-30px] z-20 cursor-pointer"
      onClick={onClick}
    >
      <ArrowCircleLeftIcon style={{ fontSize: 50, color: "#c718c5" }} />
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
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-gray-800"></h2>
        <p className="text-center"></p>

        <Heading
          title="What Our Customers Say"
          discription="Discover how Helpmate has made a difference in our customers’ lives.
          Real stories from real people who trusted us with their daily needs."
        />

        <div className="w-[80%] mx-auto">
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-8 pb-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-l transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">“{t.text}”</p>
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
