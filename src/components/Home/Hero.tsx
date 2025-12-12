import { useEffect, useRef, useState } from "react";
import cube from "../../assets/cube.png";
import leftCube from "../../assets/left-cube.png";
import rightCube from "../../assets/right-cube.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    const original = `India's Most<br />Promising<br />PR Agency`;
    const lines = original.split("<br />");
    let result = "";

    lines.forEach((line, index) => {
      line.split("").forEach((char) => {
        if (char === " ") {
          result += `<span class="char">&nbsp;</span>`;
        } else {
          result += `<span style="display:inline-block" class="char">${char}</span>`;
        }
      });

      if (index < lines.length - 1) result += "<br />";
    });
    setHtml(result); // React now controls the HTML!
  }, []);

  useEffect(() => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll(".char");
    gsap.from(chars, {
      y: 100,
      opacity: 0,
      stagger: 0.03,
      delay: 1.3,
      ease: "power3.out",
    });
  }, [html]);
  useGSAP(() => {
    gsap.from(".move", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      delay: 1.3,
      ease: "power3.out",
    });
    gsap.from(".mcube", {
      y: 200,
      opacity: 0,
      duration: 2,
      delay: 1.5,
      ease: "elastic"
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;

    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // convert to percentage (-1 to 1)
    const xNorm = (x / rect.width) * 2 - 1;
    const yNorm = (y / rect.height) * 2 - 1;

    // now apply small movement
    gsap.to(".cube", {
      x: xNorm * 30, // move max 30px left/right
      y: yNorm * 30, // move max 30px up/down
      duration: 0.4,
      ease: "power3.out",
    });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="md:flex min-w-full min-h-screen pt-36 justify-between items-center"
    >
      <div className="pl-[6vw] md:w-1/2">
        <h2
          ref={textRef}
          className="text-7xl md:text-[6vw] uppercase md:leading-28"
          dangerouslySetInnerHTML={{ __html: html }}
        ></h2>
      </div>
      <div className="flex md:w-1/2 items-baseline overflow-hidden md:overflow-visible">
        <img className="cube move w-fit h-fit" src={leftCube} />
        <img className="mcube w-fit h-fit" src={cube} alt="" />
        <img className="cube move w-fit h-fit" src={rightCube} />
      </div>
    </div>
  );
};

export default Hero;
