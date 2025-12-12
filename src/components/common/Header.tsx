import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
// import { List } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(headerRef.current, {
      background: "#051152b3",
      scrollTrigger: {
        trigger: headerRef.current,
        start: 0.1,
        markers: false,
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={headerRef}
      className="fixed z-10 space-x-[20vw] bg-[#051152] text-white h-fit w-full flex justify-around items-center backdrop-blur-lg"
    >
      <div>
        <Link to={"/"}>
          <img className="w-32 md:w-44" src={logo} />
        </Link>
      </div>
      <div className="md:flex hidden gap-12 items-center font-semibold">
        <Link
          className={`hover:text-orange-400 transition-all duration-150 ease-in ${
            pathname === "/" ? "text-orange-400" : ""
          }`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={`hover:text-orange-400 transition-all duration-150 ease-in ${
            pathname === "/about" ? "text-orange-400" : ""
          }`}
          to={"/about"}
        >
          About
        </Link>
        <Link
          className={`hover:text-orange-400 transition-all duration-150 ease-in ${
            pathname === "/services" ? "text-orange-400" : ""
          }`}
          to={"/services"}
        >
          Services
        </Link>
        <Link
          className={`hover:text-orange-400 transition-all duration-150 ease-in ${
            pathname === "/blog" ? "text-orange-400" : ""
          }`}
          to={"/blog"}
        >
          Blog
        </Link>
        <Link
          className={`hover:text-orange-400 transition-all duration-150 ease-in ${
            pathname === "/contact" ? "text-orange-400" : ""
          }`}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
      {/* <div className="block md:hidden">
        <List className="cursor-pointer" />
      </div> */}
    </div>
  );
};
export default Header;
