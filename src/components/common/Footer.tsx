import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#051052] text-white pt-16 pb-8 font-mulish relative overflow-hidden">
            {/* Background elements if needed for subtlety */}

            <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Logo & Certification */}
                    <div className="space-y-8">
                        <div>
                            {/* Logo Placeholder - Replacing with Text based on image if logo asset missing */}
                            <h2 className="text-4xl font-bold font-poppins text-white mb-2">
                                PR<span className="text-[#fc7c2c]">24x7</span>
                            </h2>
                        </div>

                        {/* Certification Badge Placeholder */}
                        <div className="inline-block bg-[#ffd700] text-black p-4 font-bold text-center rounded-sm max-w-[200px]">
                            <p className="text-xs uppercase tracking-wider mb-1">Amazing Workplaces Certified</p>
                            <p className="text-[10px] font-semibold bg-black text-white py-1 px-2 inline-block">Jan 2025 - Jan 2026</p>
                        </div>
                    </div>

                    {/* Column 2: Recent Works */}
                    <div>
                        <ul className="space-y-6">
                            <li className="border-b border-gray-700/50 pb-4 last:border-0 last:pb-0">
                                <p className="hover:text-[#fc7c2c] transition-colors cursor-pointer text-sm leading-relaxed">
                                    <span className="text-[#fc7c2c] mr-2">•</span>
                                    #Kshema General Insurance - Protecting your farm, Campaign
                                </p>
                            </li>
                            <li className="border-b border-gray-700/50 pb-4 last:border-0 last:pb-0">
                                <p className="hover:text-[#fc7c2c] transition-colors cursor-pointer text-sm leading-relaxed">
                                    <span className="text-[#fc7c2c] mr-2">•</span>
                                    Dharma Productions: Yodha Event - Trailer Launch
                                </p>
                            </li>
                            <li className="border-b border-gray-700/50 pb-4 last:border-0 last:pb-0">
                                <p className="hover:text-[#fc7c2c] transition-colors cursor-pointer text-sm leading-relaxed">
                                    <span className="text-[#fc7c2c] mr-2">•</span>
                                    KISNA DIAMOND JEWELLERY - STORE LAUNCH, PUNE
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Case Studies", path: "#" },
                                { name: "Blog", path: "/blog" },
                                { name: "We are Hiring", path: "#" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-[#fc7c2c] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get in touch */}
                    <div>
                        <h3 className="text-2xl font-bold font-poppins mb-8">Get in touch</h3>
                        <div className="space-y-6 text-sm text-gray-300">
                            <div className="flex gap-4 items-start">
                                <MapPin className="text-[#fc7c2c] shrink-0 mt-1" size={20} />
                                <p className="leading-relaxed">
                                    Indore Office: 406, Maloo-01, Plot No. 26 Near Miraj Multiplex, Ring Road, Indore-452010
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Mail className="text-[#fc7c2c] shrink-0" size={20} />
                                <a href="mailto:breakfastnews@pr24x7.com" className="hover:text-white transition-colors">
                                    breakfastnews@pr24x7.com
                                </a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Phone className="text-[#fc7c2c] shrink-0" size={20} />
                                <a href="tel:+91-9755020247" className="hover:text-white transition-colors">
                                    +91-9755020247
                                </a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Phone className="text-[#fc7c2c] shrink-0 opacity-0" size={20} /> {/* Spacer for alignment */}
                                <a href="tel:+91-9827092823" className="hover:text-white transition-colors">
                                    +91-9827092823
                                </a>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 pt-4">
                                {[Linkedin, Instagram, Facebook, Youtube].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#fc7c2c] hover:text-white transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; PR 24x7 {new Date().getFullYear()} | Building Reputation Since 1999</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
