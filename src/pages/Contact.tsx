import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        // Subtle entry animations - using from for better sharpness and clearing props after
        gsap.from(".contact-fade-up", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.1,
            clearProps: "all" // CRITICAL: Removes all GSAP inline styles after animation for total sharpness
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Use relative path to leverage Vite proxy
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <div className="bg-[#fcfcfd] min-h-screen pt-24 font-mulish overflow-hidden">
            {/* Minimalist Hero Section */}
            <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b border-gray-100 bg-white overflow-hidden">
                {/* Clean, Sharp Background Accents using Gradients (No Blur Filter) */}
                <div
                    className="absolute top-[-250px] right-[-150px] w-[600px] h-[600px] pointer-events-none opacity-40 transition-opacity duration-300"
                    style={{ background: 'radial-gradient(circle, rgba(239, 246, 255, 1) 0%, rgba(239, 246, 255, 0) 70%)' }}
                ></div>
                <div
                    className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] pointer-events-none opacity-30 transition-opacity duration-300"
                    style={{ background: 'radial-gradient(circle, rgba(255, 247, 237, 1) 0%, rgba(255, 247, 237, 0) 70%)' }}
                ></div>

                <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                    <div className="max-w-3xl contact-fade-up">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#fc7c2c]"></span>
                            <span className="text-[#fc7c2c] font-bold text-xs uppercase tracking-[0.2em]">Contact Us</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#051052] mb-8 font-poppins tracking-tight leading-[1.1]">
                            Let's build your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#051052] to-[#4c5ed5]">reputation together.</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            Have a project in mind or just want to say hi? We'd love to hear from you.
                            Our team typically responds within 24 hours.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1240px] mx-auto px-6 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Sleek Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16 contact-fade-up">
                        <div className="space-y-12">
                            {/* Contact Method: Phone */}
                            <div className="group cursor-default">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Phone</p>
                                <div className="space-y-1">
                                    <a href="tel:+919755020247" className="block text-xl font-bold text-[#051052] hover:text-[#fc7c2c] transition-colors duration-300">
                                        +91 97550 20247
                                    </a>
                                    <a href="tel:+919827092823" className="block text-xl font-bold text-[#051052] hover:text-[#fc7c2c] transition-colors duration-300">
                                        +91 98270 92823
                                    </a>
                                </div>
                            </div>

                            {/* Contact Method: Email */}
                            <div className="group cursor-default">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Email</p>
                                <a href="mailto:breakfastnews@pr24x7.com" className="text-xl font-bold text-[#051052] hover:text-[#fc7c2c] transition-colors duration-300 break-all">
                                    breakfastnews@pr24x7.com
                                </a>
                            </div>

                            {/* Contact Method: Office */}
                            <div className="group cursor-default">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Indore Office</p>
                                <address className="not-italic text-lg text-gray-500 font-medium leading-[1.8] max-w-xs">
                                    406, Maloo-01, Plot No. 26 <br />
                                    Near Miraj Multiplex, Ring Road, <br />
                                    Indore - 452010
                                </address>
                                <a
                                    href="https://maps.app.goo.gl/asUAZEhcrrGBUAc88"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 text-xs font-bold text-[#fc7c2c] hover:gap-3 transition-all underline decoration-1 underline-offset-4"
                                >
                                    GET DIRECTIONS <ArrowRight size={14} />
                                </a>
                            </div>

                            {/* Contact Method: Hours */}
                            <div className="group cursor-default">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Availability</p>
                                <p className="text-lg text-gray-500 font-medium">
                                    Mon — Sat, 10am — 7pm
                                </p>
                            </div>
                        </div>

                        {/* Social Links - Minimalist */}
                        <div className="pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-6">
                                {['LinkedIn', 'Instagram', 'Facebook', 'Twitter'].map((social) => (
                                    <a key={social} href="#" className="text-xs font-black text-[#051052]/40 hover:text-[#fc7c2c] transition-colors duration-300 tracking-tighter">
                                        {social.toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highly Polished Form */}
                    <div className="lg:col-span-8 contact-fade-up">
                        <div className="bg-white p-8 md:p-14 lg:p-16 rounded-[2rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] relative">
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {/* Input: Name */}
                                    <div className="relative group">
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className="peer w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#051052] transition-colors outline-none text-[#051052] font-semibold text-lg"
                                        />
                                        <label className="absolute left-0 top-4 text-gray-400 font-medium pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#fc7c2c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                            FULL NAME
                                        </label>
                                    </div>

                                    {/* Input: Email */}
                                    <div className="relative group">
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className="peer w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#051052] transition-colors outline-none text-[#051052] font-semibold text-lg"
                                        />
                                        <label className="absolute left-0 top-4 text-gray-400 font-medium pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#fc7c2c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                            EMAIL ADDRESS
                                        </label>
                                    </div>

                                    {/* Input: Phone */}
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className="peer w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#051052] transition-colors outline-none text-[#051052] font-semibold text-lg"
                                        />
                                        <label className="absolute left-0 top-4 text-gray-400 font-medium pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#fc7c2c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                            PHONE NUMBER
                                        </label>
                                    </div>

                                    {/* Input: Subject */}
                                    <div className="relative group">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="peer w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#051052] transition-colors outline-none text-[#051052] font-semibold text-lg appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled hidden></option>
                                            <option value="general">GENERAL INQUIRY</option>
                                            <option value="pr">PR SERVICES</option>
                                            <option value="digital">DIGITAL MARKETING</option>
                                            <option value="crisis">CRISIS MANAGEMENT</option>
                                        </select>
                                        <label className={`absolute left-0 font-medium pointer-events-none transition-all ${formData.subject ? '-top-4 text-xs text-[#fc7c2c]' : 'top-4 text-gray-400'}`}>
                                            WHAT ARE YOU LOOKING FOR?
                                        </label>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Input: Message */}
                                <div className="relative group pt-4">
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder=" "
                                        className="peer w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#051052] transition-colors outline-none text-[#051052] font-semibold text-lg resize-none"
                                    ></textarea>
                                    <label className="absolute left-0 top-8 text-gray-400 font-medium pointer-events-none transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#fc7c2c] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                                        TELL US ABOUT YOUR PROJECT
                                    </label>
                                </div>

                                {/* Minimalist Submit Button */}
                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className={`relative z-10 w-full group overflow-hidden py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase transition-all duration-500 
                                    ${status === "success" ? "bg-emerald-500 text-white" : status === "error" ? "bg-red-500 text-white" : "bg-[#051052] text-white hover:bg-[#fc7c2c] active:scale-[0.98] shadow-xl shadow-[#051052]/10"}
                                    `}
                                >
                                    {status === "loading" ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            SENDING...
                                        </div>
                                    ) : status === "success" ? (
                                        "SUCCESSFULLY SENT"
                                    ) : status === "error" ? (
                                        "FAILED TO SEND"
                                    ) : (
                                        <div className="flex items-center justify-center gap-3">
                                            SEND MESSAGE
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Crystal Clear Map Section */}
            <div className="w-full h-[600px] relative overflow-hidden group border-t border-gray-100">
                <iframe
                    src="https://www.google.com/maps?q=PR24x7.com+Indore&output=embed"
                    className="w-full h-full border-0 transition-all duration-700 ease-in-out"
                    loading="lazy"
                    title="PR 24x7 Indore Office"
                ></iframe>
            </div>

        </div>
    );
};

export default Contact;
