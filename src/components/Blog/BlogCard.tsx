import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
    image: string;
    date: string;
    title: string;
    excerpt: string;
    slug: string;
    url?: string;
}

const BlogCard = ({ image, date, title, excerpt, slug, url }: BlogCardProps) => {
    const isExternal = url && url.startsWith('http');
    // We explicitly cast to 'any' to avoid TypeScript union type issues with props
    const LinkComponent = isExternal ? 'a' : Link;
    const linkProps = isExternal
        ? { href: url, target: "_blank", rel: "noopener noreferrer" }
        : { to: `/blog/${slug}` };

    return (
        <div className="group mb-12 flex flex-col h-full">
            {/* Image Container */}
            <div className="w-full overflow-hidden rounded-xl mb-6 relative shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <LinkComponent {...(linkProps as any)} className="block relative overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-colors duration-500" />
                </LinkComponent>
            </div>

            {/* Content Container */}
            <div className="flex flex-col space-y-3">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 font-mulish">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#fc7c2c]" />
                        <span>{date}</span>
                    </div>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <div className="flex items-center gap-1">
                        <User size={14} className="text-[#fc7c2c]" />
                        <span>PR 24x7</span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#051052] font-poppins leading-snug group-hover:text-[#fc7c2c] transition-colors duration-300">
                    <LinkComponent {...(linkProps as any)}>{title}</LinkComponent>
                </h2>

                <p className="text-gray-600 font-mulish text-[15px] leading-relaxed line-clamp-3">
                    {excerpt}
                </p>

                <div className="pt-2">
                    <LinkComponent
                        {...(linkProps as any)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#051052] border-b-2 border-transparent hover:border-[#fc7c2c] hover:text-[#fc7c2c] transition-all duration-300 group/btn"
                    >
                        READ MORE
                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </LinkComponent>
                </div>
            </div>

            {/* Subtle Divider */}
            <hr className="mt-10 border-gray-100/80" />
        </div>
    );
};

export default BlogCard;
