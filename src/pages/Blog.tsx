import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "../components/Blog/BlogCard";
import Sidebar from "../components/Blog/Sidebar";
import BlogSkeleton from "../components/Blog/BlogSkeleton";

interface Post {
    _id: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    slug: string;
    url?: string;
}

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const postsPerPage = 10;

    // REPLACE WITH YOUR MEDIASTACK ACCESS KEY
    const ACCESS_KEY = "ebeaf52b98bb73ec2c45fc4c1dad125a";

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                // Fetching from Mediastack API
                // Note: The free plan only supports HTTP, not HTTPS.
                const offset = (currentPage - 1) * postsPerPage;
                const searchParam = searchQuery ? `&keywords=${encodeURIComponent(searchQuery)}` : '&keywords=technology,business';

                const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${ACCESS_KEY}${searchParam}&languages=en&limit=${postsPerPage}&offset=${offset}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();

                // Calculate total pages (Mediastack limit is 10,000 usually)
                const total = data.pagination ? data.pagination.total : 0;
                setTotalPages(Math.ceil(total / postsPerPage));

                // Map the Mediastack API response to our Post interface
                const mappedPosts = data.data.map((article: any, index: number) => ({
                    _id: (index + offset).toString(), // Mediastack doesn't provide IDs, so we use index
                    title: article.title,
                    date: new Date(article.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    image: article.image || `https://picsum.photos/seed/${index + offset + 50}/800/600`, // Fallback image
                    excerpt: article.description || "No description available for this article.",
                    slug: "#", // External content usually doesn't have internal slugs
                    url: article.url
                }));

                setPosts(mappedPosts);
                window.scrollTo({ top: 300, behavior: 'smooth' });
            } catch (err) {
                setError('Failed to load blog posts. Check your API Key or try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [currentPage, searchQuery]);


    if (error) {
        return (
            <div className="min-h-screen bg-white flex justify-center items-center text-red-500">
                {error}
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen pt-24 w-full overflow-x-hidden">
            {/* Page Header */}
            <div className="bg-[#051152] py-16 md:py-24 text-center mb-16 relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[white] mb-4 font-poppins relative z-10">
                    PR 24x7 Blog
                </h1>
                <div className="flex justify-center items-center gap-2 font-mulish text-md font-semibold relative z-10">
                    <span className="text-[white] cursor-pointer transition-colors">Home</span>
                    <span className="text-[white]">{`-`}</span>
                    <span className="text-[white]">Blog</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-0 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Blog Posts Column */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {loading ? (
                                // Show skeletons while loading
                                Array.from({ length: 5 }).map((_, index) => (
                                    <BlogSkeleton key={index} />
                                ))
                            ) : posts.length > 0 ? (
                                posts.map((post) => (
                                    <BlogCard
                                        key={post._id}
                                        title={post.title}
                                        date={post.date}
                                        image={post.image}
                                        excerpt={post.excerpt}
                                        slug={post.slug}
                                        url={post.url}
                                    />
                                ))
                            ) : (
                                <div className="text-center py-20 text-gray-500 font-mulish">
                                    No posts found matching your search.
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {!loading && posts.length > 0 && (
                            <div className="flex items-center justify-start gap-3 mt-16 font-mulish">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="w-10 h-10 flex items-center justify-center rounded-none border border-gray-200 text-gray-500 hover:bg-[#fc7c2c] hover:text-white hover:border-[#fc7c2c] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft size={18} />
                                </button>

                                <span className="h-10 px-4 flex items-center justify-center bg-gray-100 text-[#051052] font-semibold text-sm">
                                    Page {currentPage} of {totalPages || 1}
                                </span>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage >= totalPages}
                                    className="w-10 h-10 flex items-center justify-center rounded-none border border-gray-200 text-gray-500 hover:bg-[#fc7c2c] hover:text-white hover:border-[#fc7c2c] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4 pl-0 lg:pl-10">
                        <div className="sticky top-40">
                            <Sidebar onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;