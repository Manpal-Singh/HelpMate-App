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
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Manpal Singh",
              role: "Founder & Visionary",
              img: "https://avatars.githubusercontent.com/u/18425475?v=4",
            },
            {
              name: "Sarah Lee",
              role: "Product Designer",
              img: "https://avatars.githubusercontent.com/u/18425475?v=4",
            },
            {
              name: "David Kim",
              role: "Lead Developer",
              img: "https://avatars.githubusercontent.com/u/18425475?v=4",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

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

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote:
                "HelpMate has completely changed how I organize my work. It's like having a personal assistant!",
              name: "Priya Sharma",
            },
            {
              quote:
                "Simple, smart, and reliable. I can’t imagine my day without it.",
              name: "John Carter",
            },
          ].map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6">
              <p className="italic text-gray-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-indigo-600">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <a
          href="/signup"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100"
        >
          Join HelpMate Today
        </a>
      </section>
    </div>
  );
};

export default About;
