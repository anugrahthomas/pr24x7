import Hero from "../components/Home/Hero";
import ImageCard from "../components/Home/ImageCard";
import AboutSection from "../components/Home/AboutSection";
import CardList from "../components/Home/CardList";
import CoreCardList from "../components/Home/CoreCardList";
import CaseLink from "../components/Home/CaseLink";
import CaseCardList from "../components/Home/CaseCardList";
import TeamCardList from "../components/Home/TeamCardList";

const Home = () => {
  return (
    <div className="relative min-h-screen w-screen bg-[#051052] text-white">
      <Hero />

      <div className="min-h-screen bg-white">
        <div className="md:px-[8vw] py-5 grid grid-cols-2 md:grid-cols-4 items-center gap-2">
          <CardList />
        </div>
        <div className="pt-20 flex flex-col md:flex-row items-center justify-center md:gap-32 gap-10">
          <ImageCard />
          <AboutSection />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100">
        <h2 className="pt-20 text-center text-4xl text-[#051052] font-extrabold">
          Core Services
        </h2>
        <CoreCardList />
      </div>

      <div className="pt-20 pb-10 min-h-screen bg-white">
        <h4 className="text-[#051052] text-xl text-center uppercase font-semibold">
          Our Work
        </h4>
        <h2 className="text-[#051052] text-4xl text-center font-extrabold">
          PR Case Studies
        </h2>
        <CaseLink />
        <CaseCardList />
      </div>

      <div className="pt-20 min-h-screen bg-gray-100">
        <h2 className="text-[#051052] text-4xl text-center font-extrabold">
          Meet Our Team
        </h2>
          <TeamCardList />
      </div>
    </div>
  );
};
export default Home;
