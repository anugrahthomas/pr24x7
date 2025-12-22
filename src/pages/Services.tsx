import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { TrendingUp, Monitor, AlertTriangle, Globe, Calendar, FileText } from "lucide-react";

const Services = () => {
    // Refs for parallax animations
    const servicesGridRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const services = [
        {
            icon: TrendingUp,
            title: "Brand Enhancement",
            description: "In this ever-changing world, it is no longer enough to stand still when it comes to a brand.",
            link: "/services/brand-enhancement"
        },
        {
            icon: Monitor,
            title: "Media Monitoring",
            description: "Know the impact of your campaigns by monitoring the output of print, online and broadcast media.",
            link: "/services/media-monitoring"
        },
        {
            icon: AlertTriangle,
            title: "Crisis Communication",
            description: "Crisis management comes to play when a brand/corporate faces financial or reputation crisis.",
            link: "/services/crisis-communication"
        },
        {
            icon: Globe,
            title: "Digital Content Placement & Newswire",
            description: "This helps to boost your online presence, by disseminating the right message to the right audience at the right time",
            link: "/services/newswire"
        },
        {
            icon: Calendar,
            title: "Events & Expo",
            description: "PR, strategic consultancy, marketing support, event management, and more.",
            link: "/services/events-expo"
        },
        {
            icon: FileText,
            title: "Content & Translation",
            description: "Press releases to articles and translations. All in all, we serve content in over 10+ languages.",
            link: "/services/content-translation"
        }
    ];

    const testimonials = [
        {
            name: "Abhishek Sinha",
            position: "Director PR, OYO",
            quote: "PR24x7 has been our communications partner for nearly three years. What began as a regional agency has rapidly evolved into a professionally managed firm known for its agility, reliability, and consistent delivery. Their expertise now extends to handling crisis communication, where they have been doing a good job."
        },
        {
            name: "Bhharati M Kabre",
            position: "AVP PR and Communications, Sony SAB and Hindi Movies Cluster",
            quote: "PR 24×7 has been an invaluable partner for over a decade, consistently elevating our public relations efforts through proactive strategies and innovative ideas. Their deep understanding of our brand and vision, combined with tailored campaigns, a strong nationwide network, and flawless execution, has greatly enhanced our visibility and reputation."
        },
        {
            name: "Hemisha Raigaga",
            position: "Corporate Communications",
            quote: "The marvellous outcome of media, Good personal connect leading to great coverage, Ensured good media presence always and appropriate crisis management during the events, Good ownership and execution from end to end, Appreciable post-event media connect and real-time feedback in Mahindra Baja event every year"
        },
        {
            name: "Rahat Berry",
            position: "Percept Profile",
            quote: "We are pleased to inform you that we have had a long-lasting association with Atul Malikram team and feel that he is not only effective as a corporate PR expert but also delivers effectively on issues-based campaigns. We have been quite satisfied with the service level of his team."
        },
        {
            name: "Mohan Nair",
            position: "Mahindra and Mahindra",
            quote: "Whenever our company launched a new product, the effective coverage disseminated across print and online media gave us a big boost -…. Thanks, Atul"
        },
        {
            name: "Kavita Lakhani",
            position: "Golinopinion",
            quote: "Just a note to thank you all your efforts in making various arrangements during our presentation at the health awareness campaign. you sure had to sweat it out, but by going by the feedback on the coverage, efforts have been worth it."
        }
    ];

    // Carousel Logic
    const testimonialsPerView = typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 2;
    const maxIndex = Math.ceil(testimonials.length / testimonialsPerView) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [maxIndex, testimonialsPerView]);

    // Parallax animations
    useGSAP(() => {
        // Services grid - stagger animation
        if (servicesGridRef.current) {
            const serviceCards = servicesGridRef.current.children;
            gsap.from(serviceCards, {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: servicesGridRef.current,
                    start: "top 80%",
                }
            });
        }

        // Testimonials - stagger
        if (testimonialsRef.current) {
            const testimonialCards = testimonialsRef.current.children;
            gsap.from(testimonialCards, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: testimonialsRef.current,
                    start: "top 80%",
                }
            });
        }
    }, []);


    const clientLogos = [
        { name: "ICICI Prudential", icon: "https://pr24x7.com/wp-content/uploads/2022/11/2.svg" },
        { name: "Sony SAB", icon: "https://pr24x7.com/wp-content/uploads/2022/11/3.svg" },
        { name: "HDFC Bank", icon: "https://pr24x7.com/wp-content/uploads/2022/11/4.svg" },
        { name: "ASUS", icon: "https://pr24x7.com/wp-content/uploads/2022/11/5.svg" },
        { name: "Zee Media", icon: "https://pr24x7.com/wp-content/uploads/2022/11/7.svg" },
        { name: "Mahindra", icon: "https://pr24x7.com/wp-content/uploads/2022/11/8.svg" },
        { name: "Tata Steel", icon: "https://pr24x7.com/wp-content/uploads/2022/11/9.svg" },
        { name: "Reliance", icon: "https://pr24x7.com/wp-content/uploads/2022/11/10.svg" },
        { name: "Godrej", icon: "https://pr24x7.com/wp-content/uploads/2022/11/11.svg" },
        { name: "ITC", icon: "https://pr24x7.com/wp-content/uploads/2022/11/12.svg" },
        { name: "Bisleri", icon: "https://pr24x7.com/wp-content/uploads/2022/11/13.svg" },
        { name: "Amul", icon: "https://pr24x7.com/wp-content/uploads/2022/11/14.svg" },
        { name: "Britannia", icon: "https://pr24x7.com/wp-content/uploads/2022/11/2.svg" },
        { name: "Parle", icon: "https://pr24x7.com/wp-content/uploads/2022/11/3.svg" },
        { name: "Client 15", icon: "https://pr24x7.com/wp-content/uploads/2022/11/4.svg" },
        { name: "Client 16", icon: "https://pr24x7.com/wp-content/uploads/2022/11/5.svg" },
        { name: "Client 17", icon: "https://pr24x7.com/wp-content/uploads/2022/11/7.svg" },
        { name: "Client 18", icon: "https://pr24x7.com/wp-content/uploads/2022/11/8.svg" },
        { name: "Client 19", icon: "https://pr24x7.com/wp-content/uploads/2022/11/9.svg" },
        { name: "Client 20", icon: "https://pr24x7.com/wp-content/uploads/2022/11/10.svg" }
    ];

    const [clientIndex, setClientIndex] = useState(0);
    const clientsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 4 : 6;
    const maxClientStep = clientLogos.length - clientsPerView;

    useEffect(() => {
        const interval = setInterval(() => {
            setClientIndex((prev) => (prev >= maxClientStep ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [maxClientStep]);

    return (
        <div className="bg-white min-h-screen pt-24 w-full overflow-x-hidden">

            {/* Page Header */}
            <div className="bg-[#051052] py-20 text-center relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins relative z-10">
                    Services
                </h1>
                <div className="flex justify-center items-center gap-2 font-mulish text-md font-semibold relative z-10">
                    <Link to="/" className="text-white hover:text-[#fc7c2c] transition-colors">Home</Link>
                    <span className="text-white">{`-`}</span>
                    <span className="text-white">Services</span>
                </div>
            </div>

            {/* Core Services Section - Grid Layout like Reference */}
            <div className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#051052] font-poppins mb-4">
                        Core Services
                    </h2>
                </div>

                {/* Services Grid - 2x3 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16" ref={servicesGridRef}>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                to={service.link}
                                className="group flex gap-5 items-start h-full"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <Icon className="w-12 h-12 text-[#051052] group-hover:text-[#fc7c2c] transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-[#051052] font-poppins mb-3 uppercase tracking-wide group-hover:text-[#fc7c2c] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 font-mulish leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Client Testimonials Section - Auto-playing Carousel */}
            <div className="bg-gray-50 py-24 overflow-hidden relative">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="relative group">
                        {/* Carousel Wrapper */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="flex min-w-full gap-10">
                                        {testimonials
                                            .slice(slideIndex * testimonialsPerView, (slideIndex + 1) * testimonialsPerView)
                                            .map((testimonial, index) => (
                                                <div
                                                    key={index}
                                                    className={`${testimonialsPerView === 1 ? 'w-full' : 'w-1/2'} flex flex-col sm:flex-row gap-10 bg-white p-10 sm:p-12 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-700 hover:shadow-xl group/card`}
                                                >
                                                    {/* Profile Info */}
                                                    <div className="flex-shrink-0 flex flex-col items-center sm:items-start text-center sm:text-left sm:w-44">
                                                        <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100/50 transition-all duration-700 shadow-sm">
                                                            <img
                                                                src={`https://i.pravatar.cc/150?img=${index + 10 + slideIndex * 2}`}
                                                                alt={testimonial.name}
                                                                className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
                                                            />
                                                        </div>
                                                        <div className="mt-6 w-full">
                                                            <h4 className="text-xl font-bold text-[#051052] font-poppins leading-tight">
                                                                {testimonial.name}
                                                            </h4>
                                                            <p className="text-sm text-gray-400 font-mulish mt-2 font-medium uppercase tracking-wider line-clamp-1">
                                                                {testimonial.position}
                                                            </p>
                                                            {/* Star Rating */}
                                                            <div className="flex justify-center sm:justify-start gap-1 mt-4">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current opacity-30 group-hover/card:opacity-80 transition-opacity duration-700" viewBox="0 0 20 20">
                                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Quote */}
                                                    <div className="flex-1 flex flex-col justify-start sm:justify-center pt-8 sm:pt-0 border-t sm:border-t-0 sm:border-l border-gray-100/60 sm:pl-10 relative">
                                                        <p className="text-gray-500 font-mulish leading-relaxed text-lg md:text-xl italic font-light">
                                                            "{testimonial.quote}"
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Indicators - Centered and Refined */}
                        <div className="flex justify-center gap-3 mt-12">
                            {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1 rounded-full transition-all duration-700 ${currentIndex === i ? 'bg-[#fc7c2c] w-12' : 'bg-gray-200 w-4 hover:bg-gray-300'}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Clients Carousel Section */}
            <div className="bg-white py-24">
                <div className="max-w-[1400px] mx-auto px-6">

                    <h2 className="text-4xl font-bold text-[#333] text-center mb-16 font-poppins">
                        Our Clients
                    </h2>

                    <div className="relative overflow-hidden group/clients">
                        {/* Logos Container */}
                        <div
                            className="flex items-center transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${(clientIndex * 100) / clientsPerView}%)` }}
                        >
                            {clientLogos.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-12 flex items-center justify-center opacity-100"
                                    style={{ width: `${100 / clientsPerView}%` }}
                                >
                                    <div className="h-28 w-full flex items-center justify-center">
                                        <img
                                            src={client.icon}
                                            alt={client.name}
                                            className="max-h-full max-w-full object-contain pointer-events-none"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f9fafb&color=6b7280&size=128`;
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Manual Navigation Arrows */}
                        <button
                            onClick={() => setClientIndex(prev => prev > 0 ? prev - 1 : maxClientStep)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#051052] transition-all opacity-0 group-hover/clients:opacity-100 z-10"
                            aria-label="Previous logo"
                        >
                            <svg className="w-6 h-6 outline-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setClientIndex(prev => prev < maxClientStep ? prev + 1 : 0)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#051052] transition-all opacity-0 group-hover/clients:opacity-100 z-10"
                            aria-label="Next logo"
                        >
                            <svg className="w-6 h-6 outline-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Bottom Pagination Dots */}
                    <div className="flex justify-center flex-wrap gap-2 mt-12">
                        {Array.from({ length: clientLogos.length }).map((_, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    if (i <= maxClientStep) setClientIndex(i);
                                    else setClientIndex(maxClientStep);
                                }}
                                className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${clientIndex === i
                                    ? 'bg-[#051052] scale-125'
                                    : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;