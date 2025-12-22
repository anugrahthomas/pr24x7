import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

const StairAnimation = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const stairRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairRef.current, {
      display: "flex",
    });
    tl.from(".stair", {
      height: 0,
      stagger: 0.06,
    });
    tl.to(".stair", {
      y: "-100%",
      stagger: 0.04,
    });
    tl.to(stairRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: 0,
    });

    gsap.from(appRef.current, {
      opacity: 0,
      delay:1.5
    });
  }, [pathname]);
  return (
    <>
      <div ref={stairRef} className="fixed z-10 h-screen w-full flex">
        <div className="stair h-full w-1/7 bg-blue-900"></div>
        <div className="stair h-full w-1/7 bg-blue-900"></div>
        <div className="stair h-full w-1/7 bg-blue-900"></div>
        <div className="stair h-full w-1/7 bg-blue-900"></div>
        <div className="stair h-full w-1/7 bg-blue-900"></div>
        <div className="stair h-full w-1/7 bg-blue-900"></div>
        <div className="stair h-full w-1/7 bg-blue-900"></div>
      </div>
      <div ref={appRef}>{children}</div>
    </>
  );
};

export default StairAnimation;
