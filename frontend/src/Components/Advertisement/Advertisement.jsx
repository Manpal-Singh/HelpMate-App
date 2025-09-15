import adImg1 from "../../assets/images/ad1.jpg";

const SideBar = () => {
  return (
    <div className="w-[20%] p-2 space-y-4 float-right">
      <img
        src={adImg1}
        alt="Ad 1"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default SideBar;
