import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const ImageCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(cardRef.current, {
      rotate: -360,
      scale: 0,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "550",
      },
      duration: 0.6,
    });
  });
  return (
    <div
      ref={cardRef}
      className="px-8 py-10 rounded-md flex w-fit text-black gap-2 shadow-2xl border border-gray-200"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-64 w-48 object-cover rounded-md"
          src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
          alt=""
        />
        <p className="font-semibold text-[#051052]">Anugrah Thomas</p>
        <p className="text-xs text-orange-400">Founder, PR 24x7</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-64 w-48 object-cover rounded-md"
          src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA="
          alt=""
        />
        <p className="font-semibold text-[#051052]">Sonu Kumar</p>
        <p className="text-xs text-orange-400">Managing Partner, PR 24x7 </p>
      </div>
    </div>
  );
};
export default ImageCard;
