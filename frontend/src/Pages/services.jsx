export default function ServicesPage() {
  const services = [
    {
      title: "Cook",
      icon: "🍳",
      desc: "Skilled cooks to prepare healthy and delicious meals for your family.",
    },
    {
      title: "Maid",
      icon: "🧹",
      desc: "Reliable maids to keep your home spotless and organized.",
    },
    {
      title: "Plumber",
      icon: "🔧",
      desc: "Professional plumbers to fix leaks, pipes, and fittings quickly.",
    },
    {
      title: "Electrician",
      icon: "💡",
      desc: "Certified electricians to handle repairs, installations, and wiring.",
    },
    {
      title: "Babysitter",
      icon: "🍼",
      desc: "Trusted babysitters to care for your little ones with love and safety.",
    },
    {
      title: "Driver",
      icon: "🚗",
      desc: "Experienced drivers for your daily commutes and special occasions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Trusted help for every household need — from cooking and cleaning to
          repairs and care.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose HelpMate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            {
              title: "Trusted Professionals",
              desc: "Background-verified helpers you can rely on.",
            },
            {
              title: "Easy Booking",
              desc: "Book services instantly with just a few taps.",
            },
            {
              title: "Affordable Pricing",
              desc: "Quality services that fit your budget.",
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Browse",
              desc: "Choose the service you need.",
            },
            { step: "2", title: "Book", desc: "Schedule at your convenience." },
            {
              step: "3",
              title: "Relax",
              desc: "Sit back while we do the work.",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center max-w-xs">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-indigo-600 text-white rounded-full mb-4 font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <h2 className="text-3xl font-bold mb-6">Need a Helping Hand?</h2>
        <a
          href="/book-service"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100"
        >
          Book a Service Now
        </a>
      </section>
    </div>
  );
}
