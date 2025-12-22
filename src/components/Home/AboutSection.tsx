import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const AboutSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    if (!textRef.current) return;
    gsap.from(textRef.current, {
      x: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: "550",
      },
      delay: 0.5,
      duration: 0.8,
      ease: "elastic",
    });
    gsap.from(headRef.current, {
      x: -40,
      opacity: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: "550",
      },
      delay: 0.5,
      duration: 0.8,
      ease: "elastic",
    });

    gsap.from(paraRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: "600",
      },
      delay: 0.5,
      duration: 0.8,
    });
  }, []);
  return (
    <div className="text-black justify-center flex flex-col p-4">
      <h3 ref={headRef} className="text-orange-400 text-2xl font-semibold">
        About PR 24x7
      </h3>
      <h2 ref={textRef} className="pt-2 md:text-6xl text-4xl font-bold">
        कोस-कोस पर बदले पानी,
        <br />
        चार कोस पर वाणी
      </h2>
      <p className="pt-2 md:text-lg text-gray-500">
        At PR 24x7, we believe every story deserves to be heard <br />— in the
        right language, at the right time, and in the right place.
      </p>
      <div ref={paraRef} className="pl-2 pt-2 text-gray-700">
        <p>
          – Launched with a vision to represent voices from India's heartland.
        </p>
        <p>– Built a network of 500+ regional media connections.</p>
        <p>– Focused where others overlooked.</p>
        <p>
          – Today: Trusted by top brands, especially during high-stakes moments.
        </p>
      </div>
    </div>
  );
};
export default AboutSection;
