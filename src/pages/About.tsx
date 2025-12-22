import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import {
  Building2,
  Factory,
  Gem,
  Briefcase,
  Store,
  Landmark,
  Zap,
  Globe,
} from "lucide-react";

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
  };
  index: number;
}

const TeamMemberCard = ({ member }: TeamMemberProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const enterHandler = () => {
    if (!overlayRef.current) return;

    gsap.set(overlayRef.current, { display: "flex" });
    gsap.fromTo(
      overlayRef.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  };

  const exitHandler = () => {
    if (!overlayRef.current) return;

    gsap.to(overlayRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(overlayRef.current, { display: "none" });
      },
    });
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer h-full min-h-[350px]"
      onMouseEnter={enterHandler}
      onMouseLeave={exitHandler}
    >
      <div className="w-full h-full bg-gray-200 aspect-[3/4]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
        />
      </div>

      {/* GSAP Overlay - Matches Home TeamCard */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#051052]/80 backdrop-blur-[2px] hidden flex-col items-center justify-center p-4 text-center z-10"
      >
        <h2 className="text-white text-2xl font-bold font-poppins mb-2">
          {member.name}
        </h2>
        <p className="text-white text-sm font-medium uppercase tracking-wider">
          {member.role}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const [activeUsp, setActiveUsp] = useState(0);

  // Refs for parallax animations
  const introLeftRef = useRef<HTMLDivElement>(null);
  const introRightRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const uspSectionRef = useRef<HTMLDivElement>(null);
  const teamHeaderRef = useRef<HTMLDivElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);
  const clientsHeaderRef = useRef<HTMLDivElement>(null);
  const featuredClientsRef = useRef<HTMLDivElement>(null);
  const clientGridRef = useRef<HTMLDivElement>(null);

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Parallax animations
  useGSAP(() => {
    // Intro section - slide from sides
    if (introLeftRef.current) {
      gsap.from(introLeftRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: introLeftRef.current,
          start: "top 80%",
        },
      });
    }

    if (introRightRef.current) {
      gsap.from(introRightRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: introRightRef.current,
          start: "top 80%",
        },
      });
    }

    // Why Choose Us header - fade in from bottom
    if (whyChooseRef.current) {
      gsap.from(whyChooseRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 85%",
        },
      });
    }

    // USP Section - scale and fade
    if (uspSectionRef.current) {
      gsap.from(uspSectionRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: uspSectionRef.current,
          start: "top 80%",
        },
      });
    }

    // Team header
    if (teamHeaderRef.current) {
      gsap.from(teamHeaderRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: teamHeaderRef.current,
          start: "top 85%",
        },
      });
    }

    // Team grid - stagger animation
    if (teamGridRef.current) {
      const teamCards = teamGridRef.current.children;
      gsap.from(teamCards, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamGridRef.current,
          start: "top 80%",
        },
      });
    }

    // Clients header
    if (clientsHeaderRef.current) {
      gsap.from(clientsHeaderRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: clientsHeaderRef.current,
          start: "top 85%",
        },
      });
    }

    // Featured clients - stagger
    if (featuredClientsRef.current) {
      const cards = featuredClientsRef.current.children;
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: featuredClientsRef.current,
          start: "top 80%",
        },
      });
    }

    // Client grid - stagger with rotation
    if (clientGridRef.current) {
      const logos = clientGridRef.current.children;
      gsap.from(logos, {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.2)",
        immediateRender: false,
        scrollTrigger: {
          trigger: clientGridRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  // USP Data
  const usps = [
    {
      id: "01",
      title: "24x7 Availability",
      points: [
        "We're available 24 x 7 because we know clients might need us anytime.",
        "Knowing that public relations is not a 9-5 job, it is crucial to take a proactive approach to build your brand. For this, we make ourselves available at all times.",
      ],
    },
    {
      id: "02",
      title: "Understanding of regional media",
      points: [
        "We understand regional media better than anyone else, thanks to our team in more than 68 Cities.",
      ],
    },
    {
      id: "03",
      title: "Network & Media Relations",
      points: [
        "Strong networks among tier-02 and tier-03 cities.",
        "Our team across the network has been acknowledged for its media relations capability.",
      ],
    },
    {
      id: "04",
      title: "Expert in Regional Crisis Communication",
      points: [
        "Dedicated team is available 24x7",
        "Sound understanding of risks to reputation",
        "Experience of post-crisis rehabilitation",
        "Experience in managing crises related to metal, mining, cement & other consumer-facing industries and transactions.",
      ],
    },
    {
      id: "05",
      title: "Country's Best Media Monitoring Capabilities",
      points: [
        "India's largest Media Monitoring Network.",
        "We operate 24x7 and 365 days a year",
        "Covering 450+ publications",
        "We provide reports and news clips before 8:30 am, daily, but in case of special events or crises, the requisites can be sent by 7:30 am also.",
      ],
    },
    {
      id: "06",
      title: "Culture and Stability of Consulting Team",
      points: [
        "We all share the same work culture and that makes it easier to get along at work.",
        "We’ve got senior consultants and management involved on a hands-on basis.",
        "Freedom, transparency, simplicity, and knowledge are core values for our consultancy.",
      ],
    },
    {
      id: "07",
      title: "Delivering Quality with Lasting Client Relationships",
      points: [
        "We deliver quality projects which ensure lasting relationships with our clients.",
      ],
    },
  ];

  // Team Data
  const team = [
    {
      name: "Neha Gour",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Ujjain Singh",
      role: "COO-Media Monitoring",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Parineeta Nagarkar",
      role: "COO-Client Relationship & Marketing",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Vikas Rajora",
      role: "COO-Public Affairs",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Meena Anurag Bisen",
      role: "CFO",
      image:
        "https://images.unsplash.com/photo-1598550874175-4d71156852fd?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Sansriti Dwivedi",
      role: "COO-Strategic Communication",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Deepak Chadha",
      role: "President, PR & Public Affairs (UP)",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Pawan Tripathi",
      role: "Consultant Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Rohit Singh",
      role: "Assistant CEO",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop",
    },
    {
      name: "Vineet Bhatt",
      role: "VP - Monitoring",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
    {
      name: "Iqbal Patel",
      role: "Assistant COO",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop",
    },
    {
      name: "Surbhi Chourasiya",
      role: "Sr. Content Manager",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    },
    {
      name: "Surbhi Patidar",
      role: "PR Account Manager",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop",
    },
    {
      name: "Shradha Chakraborty",
      role: "Sr. Manager",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    },
    {
      name: "Urvashi Verma",
      role: "Manager PR",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      name: "Kapil Rajora",
      role: "Manager PR",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      name: "Isha Bargal",
      role: "Senior Executive Finance",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
    },
    {
      name: "Ankuj Rana",
      role: "Sr. Executive PR",
      image:
        "https://images.unsplash.com/photo-1488161628813-99c974fc5b11?w=400&h=500&fit=crop",
    },
    {
      name: "Rinku Rani Yadav",
      role: "Sr. HR and Project Co-ordinator",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop",
    },
    {
      name: "Shivani Tandon",
      role: "Sr. Executive PR",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 w-full overflow-x-hidden">
      {/* Page Header */}
      <div className="bg-[#051152] py-20 text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[white] mb-4 font-poppins relative z-10">
          About
        </h1>
        <div className="flex justify-center items-center gap-2 font-mulish text-md font-semibold relative z-10">
          <Link
            to="/"
            className="text-[white] hover:text-[#fc7c2c] transition-colors"
          >
            Home
          </Link>
          <span className="text-[white]">{`-`}</span>
          <span className="text-[white]">About</span>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 space-y-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={introLeftRef}>
            <h2 className="text-3xl font-bold text-[#051052] mb-6 font-poppins relative inline-block">
              About us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#fc7c2c]"></span>
            </h2>
            <div className="text-gray-600 space-y-4 font-mulish leading-relaxed text-lg">
              <p>
                PR 24x7 is a corporate communication agency. It is one of the
                best PR agencies in India. We are a group of dreamers which
                include PR professionals, publicists, writers, strategists, and
                media co-coordinators, dedicated 24x7 for you.
              </p>
              <p>
                Do you have an untold story you'd like to introduce to the world
                but are apprehensive? You needn't worry because you are at the
                right place. We are happy to help you, strategically to present
                your story to the world, meet your objective, and create an
                impact.
              </p>
            </div>
          </div>
          <div ref={introRightRef}>
            <h2 className="text-3xl font-bold text-[#051052] mb-6 font-poppins relative inline-block">
              20+ Years of Experience
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#fc7c2c]"></span>
            </h2>
            <div className="text-gray-600 space-y-4 font-mulish leading-relaxed text-lg">
              <p>
                Our history is an unconventional one as it is a passionate love
                story! The Story of our founder Mr. Atul Malikram. His journey
                began back in 1999. After gaining a lot of experience and
                knowledge in the field of PR, he decided to establish his PR
                agency and PR 24x7 was born. He had implicit faith in himself
                and in the people he took along. He continued his journey
                despite the entire struggle and hardships, which took him to the
                top.
              </p>
              <p>
                Today the company has more than 500+ clients and a team of 100+
                people. But this is just the tip of the iceberg. There is so
                much more to achieve.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Header */}
        <div className="py-12 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#051052] font-poppins mb-2">
              Why Choose Us
            </h2>
            <p className="text-sm font-bold text-gray-800 uppercase tracking-[0.2em] font-mulish">
              07 Reasons why clients prefer to work with us
            </p>
          </div>
        </div>

        {/* USPs Carousel Section - Grey Background & Rounded with Gap */}
        <div
          className="py-16 bg-gray-50 rounded-3xl mt-8 px-4 md:px-12"
          ref={uspSectionRef}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#051052] uppercase tracking-wider font-poppins inline-block">
              OUR USP's
            </h2>
          </div>

          <div className="max-w-[1000px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden min-h-[400px] flex flex-col md:flex-row shadow-slate-200">
            {/* Left Side - Graphic Title */}
            <div className="md:w-2/5 bg-[#051052] flex items-center justify-center p-8 relative overflow-hidden">
              {/* Decorative angled background */}
              <div className="absolute top-0 right-0 w-20 h-full bg-[#051052] transform skew-x-[-10deg] translate-x-10 z-10 hidden md:block"></div>

              <h3
                key={activeUsp}
                className="text-4xl md:text-5xl font-black text-white font-poppins italic transform -rotate-6 md:rotate-0 text-center leading-tight z-20 animate-fade-in-subtle"
              >
                {usps[activeUsp].title
                  .toUpperCase()
                  .split(" ")
                  .map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
              </h3>
            </div>

            {/* Right Side - Content */}
            <div className="md:w-3/5 p-12 bg-white flex flex-col justify-center relative z-0">
              <div key={activeUsp} className="animate-fade-in-subtle">
                <span className="text-[#fc7c2c] font-bold text-xl font-poppins mb-4 block">
                  #{usps[activeUsp].id}
                </span>
                <h3 className="text-3xl font-bold text-[#051052] mb-6 font-poppins">
                  {usps[activeUsp].title}
                </h3>
                <ul className="space-y-4">
                  {usps[activeUsp].points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-4 items-start text-gray-600 font-mulish text-lg leading-relaxed"
                    >
                      <span className="text-[#fc7c2c] font-bold mt-1 text-xl">{`>`}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pagination - Numbered Circles */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {usps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveUsp(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${activeUsp === index
                    ? "bg-[#fc7c2c] text-white scale-110"
                    : "bg-white text-gray-400 hover:text-[#fc7c2c] hover:scale-105"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="pt-8">
          <div className="text-center mb-12" ref={teamHeaderRef}>
            <p className="text-[#fc7c2c] font-bold uppercase tracking-wider mb-2 font-mulish">
              The real people behind the scene
            </p>
            <h2 className="text-3xl font-bold text-[#051052] font-poppins">
              Meet Our Team
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={teamGridRef}
          >
            {team.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Clients Section - Updated */}
        <div className="pt-16 border-t border-gray-100">
          <div className="text-center mb-16" ref={clientsHeaderRef}>
            <h2 className="text-4xl font-bold text-[#051052] font-poppins inline-block border-b-4 border-[#fc7c2c] pb-2">
              Our Clients
            </h2>
            <p className="text-gray-600 mt-4 font-mulish">
              Trusted by leading brands across industries
            </p>
          </div>

          {/* Featured Clients / Case Studies with Icons */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            ref={featuredClientsRef}
          >
            <div className="bg-white border-2 border-gray-100 p-10 rounded-xl shadow-sm hover:shadow-xl hover:border-[#fc7c2c] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[180px] group cursor-pointer">
              <Building2
                className="w-16 h-16 text-[#051052] mb-5 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-[#051052] font-bold font-poppins text-xl mb-2 group-hover:text-[#fc7c2c] transition-colors">
                Kshema General Insurance
              </h3>
              <p className="text-gray-500 text-sm font-mulish leading-relaxed">
                Protecting your farm, Campaign
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 p-10 rounded-xl shadow-sm hover:shadow-xl hover:border-[#fc7c2c] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[180px] group cursor-pointer">
              <Factory
                className="w-16 h-16 text-[#051052] mb-5 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-[#051052] font-bold font-poppins text-xl mb-2 group-hover:text-[#fc7c2c] transition-colors">
                Dharma Productions
              </h3>
              <p className="text-gray-500 text-sm font-mulish leading-relaxed">
                Yodha Event – Trailer Launch
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 p-10 rounded-xl shadow-sm hover:shadow-xl hover:border-[#fc7c2c] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[180px] group cursor-pointer">
              <Gem
                className="w-16 h-16 text-[#051052] mb-5 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-[#051052] font-bold font-poppins text-xl mb-2 group-hover:text-[#fc7c2c] transition-colors">
                KISNA DIAMOND JEWELLERY
              </h3>
              <p className="text-gray-500 text-sm font-mulish leading-relaxed">
                STORE LAUNCH, PUNE
              </p>
            </div>
          </div>

          {/* Logo Grid with Icons */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-center text-2xl font-bold text-[#051052] font-poppins mb-8">
              500+ Brands Trust Us
            </h3>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              ref={clientGridRef}
            >
              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Building2
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Enterprise Co.
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Factory
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Manufacturing Ltd.
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Gem
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Luxury Brands
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Briefcase
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Business Corp.
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Store
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Retail Chain
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Landmark
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Financial Group
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Zap
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Tech Solutions
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Globe
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Global Inc.
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Building2
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Real Estate
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Factory
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Industrial Co.
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Briefcase
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Consulting Firm
                </span>
              </div>

              <div className="bg-white h-32 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#fc7c2c] transition-all duration-300 group cursor-pointer p-4">
                <Store
                  className="w-10 h-10 text-gray-400 group-hover:text-[#fc7c2c] group-hover:scale-110 transition-all duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="text-gray-600 group-hover:text-[#051052] font-semibold text-xs text-center transition-colors duration-300 leading-tight">
                  Commerce Ltd.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
