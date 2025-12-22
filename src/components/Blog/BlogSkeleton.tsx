const BlogSkeleton = () => {
    return (
        <div className="mb-12 flex flex-col h-full animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full aspect-video rounded-xl mb-6 skeleton" />

            {/* Content Skeleton */}
            <div className="flex flex-col space-y-4">
                {/* Meta Skeleton */}
                <div className="flex items-center gap-4">
                    <div className="h-4 w-24 skeleton rounded" />
                    <div className="h-4 w-24 skeleton rounded" />
                </div>

                {/* Title Skeleton */}
                <div className="h-8 w-3/4 skeleton rounded" />

                {/* Excerpt Skeleton */}
                <div className="space-y-2">
                    <div className="h-4 w-full skeleton rounded" />
                    <div className="h-4 w-full skeleton rounded" />
                    <div className="h-4 w-2/3 skeleton rounded" />
                </div>

                {/* Button Skeleton */}
                <div className="h-6 w-28 skeleton rounded mt-2" />
            </div>

            {/* Divider Skeleton */}
            <div className="mt-10 h-px bg-gray-100" />
        </div>
    );
};

export default BlogSkeleton;
