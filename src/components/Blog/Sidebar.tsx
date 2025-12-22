import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
    onSearch?: (query: string) => void;
}

const Sidebar = ({ onSearch }: SidebarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="space-y-12 pl-0 md:pl-8 border-l border-gray-100/50">
            {/* Search Widget */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#051052] mb-5 border-l-4 border-[#fc7c2c] pl-3 font-poppins">
                    Search
                </h3>
                <form onSubmit={handleSearch} className="relative w-full group">
                    <input
                        type="text"
                        placeholder="Type and hit enter..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 px-5 py-3 rounded-full border border-transparent focus:bg-white focus:border-[#fc7c2c]/30 focus:shadow-sm transition-all duration-300 text-gray-700 text-sm outline-none placeholder:text-gray-400"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-[#fc7c2c] rounded-full hover:bg-[#fc7c2c] hover:text-white transition-colors duration-300 shadow-sm"
                    >
                        <Search size={16} />
                    </button>
                </form>
            </div>

            {/* Recent Posts Widget */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#051052] mb-6 border-l-4 border-[#fc7c2c] pl-3 font-poppins">
                    Recent Posts
                </h3>
                <ul className="space-y-6">
                    {[
                        "The Evolution of Digital PR",
                        "Crisis Management Tips for 2025",
                        "Why Influencer Marketing Matters",
                        "Building a Strong Brand Identity",
                    ].map((post, index) => (
                        <li key={index} className="group">
                            <a href="#" className="flex gap-4 items-start group">
                                <div className="w-20 h-16 bg-gray-100 rounded-md overflow-hidden shrink-0 relative">
                                    <img
                                        src={`https://picsum.photos/seed/${index + 10}/100`}
                                        alt=""
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[14px] font-semibold text-[#051052] group-hover:text-[#fc7c2c] transition-colors leading-snug font-poppins line-clamp-2">
                                        {post}
                                    </h4>
                                    <span className="text-[11px] font-medium text-gray-400 mt-1 block uppercase tracking-wide">
                                        Oct {10 + index}, 2025
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories Widget */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#051052] mb-6 border-l-4 border-[#fc7c2c] pl-3 font-poppins">
                    Categories
                </h3>
                <ul className="space-y-2">
                    {[
                        { name: "Public Relations", count: 12 },
                        { name: "Digital Marketing", count: 8 },
                        { name: "Branding", count: 5 },
                        { name: "Social Media", count: 15 },
                        { name: "Crisis Management", count: 3 },
                    ].map((cat, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="flex items-center justify-between py-2 px-3 rounded-md text-gray-600 hover:text-[#fc7c2c] hover:bg-orange-50/50 transition-all duration-300 group"
                            >
                                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-[#fc7c2c]" />
                                    {cat.name}
                                </span>
                                <span className="text-[10px] font-bold bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full group-hover:bg-[#fc7c2c] group-hover:text-white transition-colors duration-300">
                                    {cat.count}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
