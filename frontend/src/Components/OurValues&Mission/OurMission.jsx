import Heading from "../Heading/Heading";

const OurMission = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-indigo-200 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <Heading
          title="Our Mission"
          className="text-4xl font-bold mb-6 text-gray-800"
        />

        
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold text-indigo-600">HelpMate</span>, we
          believe technology should make life simpler. Our mission is to provide
          an AI-powered companion that helps you focus on what matters most.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
