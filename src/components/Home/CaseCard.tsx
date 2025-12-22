import gsap from "gsap";
import { useRef } from "react";

const CaseCard = ({ src }: { src: string }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const handleEnter = () => {
    gsap.set(textRef.current, { display: "block" });

    gsap.fromTo(
      textRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.13,
        ease: "power1.out",
      }
    );
  };

  const handleLeave = () => {
    gsap.to(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.13,
      ease: "power1.in",
      onComplete: () => {
        gsap.set(textRef.current, { display: "none", y: 0 });
      },
    });
  };
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer"
    >
      <img
        src={src}
        className="h-full w-full object-cover group-hover:scale-125 duration-300"
      />
      <div
        ref={textRef}
        className="hidden absolute top-10 w-full h-full backdrop-blur-xs p-4"
      >
        <h2 className="p-4 font-semibold text-2xl leading-tight text-white bg-black/30 rounded-md">
          #Case Study <br />
          Dhirauli Coal Block Public Hearing
        </h2>
      </div>

      <div className="relative flex items-center justify-center">
        <h3 className="absolute -bottom-4 text-5xl font-bold text-white/80 pointer-events-none">
          CASE STUDY
        </h3>
      </div>
    </div>
  );
};

export default CaseCard;
