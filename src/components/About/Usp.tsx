import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type UspProps = {
  usp: { id: number; title: string; list: string[]; image: string };
};

const Usp = ({ usp }: UspProps) => {
  const uspRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      uspRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    tl.from(imgRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power3.out" 
    },"-=0.3");
    tl.from(textRef.current, {
      x: 10,
      opacity: 0,
      duration: 0.1,
      ease: "power3.out" 
    },"<");
  }, [usp.id]);
  return (
    <div
      ref={uspRef}
      className="md:flex md:w-6/8 md:h-[35vw] bg-white rounded-2xl shadow-xl gap-10"
    >
      <div ref={imgRef} className="w-full">
        <img
          className="h-full w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          src={usp.image}
        />
      </div>

      <div ref={textRef} className="md:pt-10 pt-4 p-4 md:p-2">
        <h2 className="text-xl md:text-2xl font-bold text-orange-400">
          #0{usp.id}
        </h2>
        <h1 className="pt-2 text-2xl md:text-4xl font-bold text-[#051052]">
          {usp.title}
        </h1>

        <div className="p-4 text-md md:text-lg">
          {usp.list.map((el, i) => (
            <li key={i} className="list-disc">
              {el}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usp;
