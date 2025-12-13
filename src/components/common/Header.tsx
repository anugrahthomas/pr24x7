import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { List, X } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "auto";
  }, [sidebar]);

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
    <>
      <div
        ref={headerRef}
        className="fixed z-10 gap-[20vw] bg-[#051152] text-white h-fit w-full flex justify-around items-center backdrop-blur-lg"
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

        <div className="block md:hidden">
          <button
              className="cursor-pointer hover:text-orange-400 transition-colors duration-150"
              onClick={() => setSidebar(true)}
            >
              <List />
            </button>
          {/* <List
            onClick={() => {
              setSidebar(true);
            }}
            className="cursor-pointer hover:text-orange-400 transition-colors duration-150"
          /> */}
        </div>
      </div>

      {sidebar && (
        <aside
          ref={sidebarRef}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-2xl text-white"
        >
          <div className="absolute right-0 top-0 h-full w-3/4 bg-[#051152]/80 p-6">
            <button
              className="mb-6 cursor-pointer hover:text-orange-400 transition-colors duration-150"
              onClick={() => setSidebar(false)}
            >
              <X />
            </button>

            <nav className="pl-6 flex flex-col gap-6 text-lg">
              <Link
                className={`hover:text-orange-400 transition-all duration-150 ease-in ${
                  pathname === "/" ? "text-orange-400" : ""
                }`}
                onClick={() => setSidebar(false)}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`hover:text-orange-400 transition-all duration-150 ease-in ${
                  pathname === "/about" ? "text-orange-400" : ""
                }`}
                onClick={() => setSidebar(false)}
                to="/about"
              >
                About
              </Link>
              <Link
                className={`hover:text-orange-400 transition-all duration-150 ease-in ${
                  pathname === "/services" ? "text-orange-400" : ""
                }`}
                onClick={() => setSidebar(false)}
                to="/services"
              >
                Services
              </Link>
              <Link
                className={`hover:text-orange-400 transition-all duration-150 ease-in ${
                  pathname === "/blog" ? "text-orange-400" : ""
                }`}
                onClick={() => setSidebar(false)}
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className={`hover:text-orange-400 transition-all duration-150 ease-in ${
                  pathname === "/contact" ? "text-orange-400" : ""
                }`}
                onClick={() => setSidebar(false)}
                to="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};
export default Header;
