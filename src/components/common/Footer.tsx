import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="py-20 p-6 flex text-white">
      <div className="hidden md:block">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl text-center font-extrabold">Get In Touch</h2>
        <div className="pt-10 space-y-5">
          <div className="flex gap-2">
            <MapPin className="text-orange-400" />
            <p>
              <strong>Indore Office</strong>
              &nbsp;406, Maloo-01, Plot No. 26 Near Miraj Multiplex, Ring Road,
              Indore-452010
            </p>
          </div>

          <a className="block" href="mailto:">
            <div className="flex gap-2">
            <Mail className="text-orange-400" />
            <p>thomasanugrah1@gmail.com</p>
          </div>
          </a>

          <a className="block" href="tel:">
            <div className="flex gap-2">
            <Phone className="text-orange-400" />
            <p>182871872912, 81787172712</p>
          </div>
          </a>

          <div className="pt-4 flex gap-2">
            <Linkedin className="text-orange-400" />
            <Instagram className="text-orange-400" />
            <Facebook className="text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
