import Advertisement from "../Advertisement/Advertisement";
import BodyContent from "../BodyContent/BodyContent";

const Body = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto">
      <BodyContent />
      <Advertisement />
    </div>
  );
};

export default Body;
