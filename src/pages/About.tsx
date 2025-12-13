import UspList from "../components/About/UspList";
import TeamCardList from "../components/Home/TeamCardList";

const About = () => {
  return (
    <div>
      <div className="pt-20 flex items-center justify-center h-80 text-white text-4xl font-bold">
        About Us
      </div>

      <div className="p-10 min-h-screen bg-white">
        <div className="md:p-10 md:flex gap-10">
          <div className="">
            <img
              className="w-[80vw] border border-gray-400 rounded-md shadow-2xl"
              src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg"
              alt=""
            />
          </div>

          <div>
            <h3 className="font-semibold text-4xl pt-4">About us</h3>
            <p className="pt-2 text-gray-600">
              PR 24×7 is a corporate communication agency. It is one of the best
              PR agencies in India. We are a group of dreamers which include PR
              professionals, publicists, writers, strategists, and media
              co-coordinators, dedicated 24×7 for you.
              <br />
              Do you have an untold story you’d like to introduce to the world
              but are apprehensive? You needn’t worry because you are at the
              right place. We are happy to help you, strategically to present
              your story to the world, meet your objective, and create an
              impact.
            </p>
          </div>
        </div>

        <div className="md:p-10 pt-20 md:flex md:flex-row-reverse gap-10">
          <div className="">
            <img
              className="w-[80vw] border border-gray-400 rounded-md shadow-2xl"
              src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg"
              alt=""
            />
          </div>

          <div>
            <h3 className="font-semibold text-4xl pt-4">
              20+ Years of Experience
            </h3>
            <p className="pt-2 text-gray-600">
              Our history is an unconventional one as it is a passionate love
              story! The Story of our founder Mr. Atul Malikram. His journey
              began back in 1999. After gaining a lot of experience and
              knowledge in the field of PR, he decided to establish his PR
              agency and PR 24×7 was born. He had implicit faith in himself and
              in the people he took along. He continued his journey despite the
              entire struggle and hardships, which took him to the top.
              <br />
              Today the company has more than 200+ clients and a team of 75+
              people. But this is just the tip of the iceberg. There is so much
              more to achieve.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20 p-6 md:p-10 min-h-screen bg-gray-100">
        <h2 className="text-[#051052] text-4xl text-center font-extrabold">
            Why Choose Us
        </h2>
        <h4 className="uppercase text-center text-gray-700 font-semibold text-md md:text-2xl pt-2">
          07 Reasons Why Clients Prefer to Work With US
        </h4>

        <div className="pt-10 flex justify-center">
            <UspList />
        </div>
      </div>

      <div className="pt-20 min-h-screen bg-white">
        <h2 className="text-[#051052] text-4xl text-center font-extrabold">
          Meet Our Team
        </h2>
        <h4 className="uppercase text-center text-orange-400 font-semibold text-2xl pt-2">
          The real people behind the scene
        </h4>
        <TeamCardList />
      </div>
    </div>
  );
};
export default About;
