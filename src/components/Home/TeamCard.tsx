import gsap from "gsap";
import { useRef } from "react";

const TeamCard = ({ member }: { member: { name: string; role: string; image: string } }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const enterHandler = () => {
    gsap.set(cardRef.current, { display: "block" });
    gsap.fromTo(
      cardRef.current,
      {
        y: "50%",
        duration: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
        ease: "power2.in",
      }
    );
  };

  const exitHandler = () => {
    gsap.to(cardRef.current, {
      y: "100%",
      onComplete: () => {
        gsap.set(cardRef.current, { display: "none" });
      },
    });
  };
  return (
    <div
      onMouseEnter={enterHandler}
      onMouseLeave={exitHandler}
      className="relative h-80 w-80 rounded-lg overflow-hidden cursor-pointer shadow-lg group"
    >
      <img
        className="h-full w-full object-cover group-hover:scale-110 transition-all duration-150 delay-75"
        src={member.image}
        alt={member.name}
      />

      <div
        ref={cardRef}
        className="absolute hidden top-0 bg-[#051052]/50 backdrop-blur-xs h-full w-full "
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl">{member.name}</h2>
          <p className="text-white text-md font-normal">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
