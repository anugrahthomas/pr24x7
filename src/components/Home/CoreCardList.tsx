import CoreCard from "./CoreCard";
import brand from "../../assets/brand.svg";
import monitoring from "../../assets/monitoring.svg";
import crisis from "../../assets/crisis.svg";
import digital from "../../assets/digital.svg";
import events from "../../assets/events.svg";
import content from "../../assets/content.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const coreData = [
  {
    title: "Brand Enhancement",
    description:
      "In this ever-changing world, it is no longer enough to stand still when it comes to a brand.",
    image: brand,
  },
  {
    title: "Media Monitoring",
    description:
      "Know the impact of your campaigns by monitoring the output of print, online and broadcast media.",
    image: monitoring,
  },
  {
    title: "Crisis Communication",
    description:
      "Crisis management comes to play when a brand/corporate faces financial or reputation crisis.",
    image: crisis,
  },
  {
    title: "Digital Content Placement & Newswire",
    description:
      "This helps to boost your online presence, by disseminating the right message to the right audience at the right time",
    image: digital,
  },
  {
    title: "Events & Expo",
    description:
      "PR, strategic consultancy, marketing support, event management, and more.",
    image: events,
  },
  {
    title: "Content & Translation",
    description:
      "Press releases to articles and translations. All in all, we serve content in over 10+ languages.",
    image: content,
  },
];

const CoreCardList = () => {
  const coreRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    if (!coreRef.current) return;
    const cards = coreRef.current.querySelectorAll(".core");
    gsap.from(cards, {
      y: 50,
      opacity:0,
      scrollTrigger:{
        trigger: coreRef.current,
        start: "20% center",
      },
      stagger: 0.18,
    });
  }, []);
  return (
    <div
      ref={coreRef}
      className="md:px-24 py-10 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-2 place-items-center"
    >
      {coreData.map((item, index) => (
        <div key={index} className="core">
          <CoreCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default CoreCardList;
