import Client from "../components/common/Client";
import CoreCardList from "../components/Home/CoreCardList";

const Services = () => {
  return (
    <div>
      <div className="pt-20 flex items-center justify-center h-80 text-white text-4xl font-bold">
        Services
      </div>
      <div className="pt-20 min-h-screen w-full bg-gray-100">
        <h2 className="text-center text-4xl text-[#051052] font-extrabold">
          Core Services
        </h2>
        <CoreCardList />

        <div className="pt-10 pb-4 bg-white">
          <h2 className="pb-6 text-center text-4xl text-[#051052] font-extrabold">
          Our Clients
        </h2>
          <Client />
        </div>
      </div>
    </div>
  );
};
export default Services;
