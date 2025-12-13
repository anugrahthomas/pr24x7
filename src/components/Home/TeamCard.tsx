import gsap from "gsap";
import { useEffect, useRef } from "react";

const TeamCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(cardRef.current, {
      y: 100,
      opacity: 0,
      pointerEvents: "none",
    });
  }, []);

  const enterHandler = () => {
    gsap.to(cardRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
      pointerEvents: "auto",
      overwrite: "auto",
    });
  };

  const exitHandler = () => {
    gsap.to(cardRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.25,
      ease: "power3.in",
      pointerEvents: "none",
      overwrite: "auto",
    });
  };
  
  return (
    <div
      onMouseEnter={enterHandler}
      onMouseLeave={exitHandler}
      className="relative h-80 w-80 rounded-lg overflow-hidden cursor-pointer shadow-lg group"
    >
      <img
        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt=""
      />

      <div
        ref={cardRef}
        className="absolute inset-0 bg-[#051052]/50 backdrop-blur-xs h-full w-full "
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl">Suraj Pandey</h2>
          <p className="text-white text-md font-normal">CEO</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
