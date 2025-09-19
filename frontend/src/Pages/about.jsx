import ReadyToHelp from "../Components/Footer/ReadyToHelp";
import Team from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">About HelpMate</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your trusted assistant for smarter productivity and effortless task
          management.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At HelpMate, we believe technology should make life simpler. Our
          mission is to provide an AI-powered companion that helps you focus on
          what matters most.
        </p>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Reliability",
              desc: "Always there when you need it, 24/7.",
            },
            {
              title: "Simplicity",
              desc: "A clean, intuitive experience for everyone.",
            },
            {
              title: "Innovation",
              desc: "Constantly evolving with the latest AI tech.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <Team />

      {/* Timeline */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          {[
            { year: "2023", event: "HelpMate idea was born." },
            {
              year: "2024",
              event: "Beta version launched with first 1,000 users.",
            },
            {
              year: "2025",
              event: "HelpMate 2.0 rolled out with AI-powered assistance.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-10 mb-8">
              <div className="absolute left-0 top-1 w-3 h-3 bg-indigo-600 rounded-full"></div>
              <h3 className="text-lg font-bold">{item.year}</h3>
              <p className="text-gray-600">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonial />

      <ReadyToHelp />
    </div>
  );
};

export default About;
