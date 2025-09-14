import { ServiceList } from "../Services/ServiceList";

const BodyContent = () => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="top-box flex flex-row gap-5 bg-white text-black p-5 items-center rounded-lg shadow-md">
        <select
          id="service"
          className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black w-[500px]"
        >
          <option value="">Services</option>
          <option value="Cook">Cook</option>
          <option value="Maid">Maid</option>
          <option value="Baby Sitter">Baby Sitter</option>
          <option value="Watchman">Watchman</option>
        </select>

        <div className="ml-auto font-semibold">Sort</div>
      </div>

      <div className="bottom-box mt-5 p-5 bg-gray-100 rounded-lg shadow-inner">
        <ServiceList />
      </div>
    </div>
  );
};

export default BodyContent;
