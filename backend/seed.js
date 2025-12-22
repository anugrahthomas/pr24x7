import mongoose from 'mongoose';
import Post from './models/Post.js';
import dotenv from 'dotenv';

dotenv.config();
console.log("Loaded Env Keys:", Object.keys(process.env).filter(k => !k.startsWith("npm_") && !k.startsWith("TERM_")));

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!uri) {
    console.error("No MongoDB URI found in .env");
    process.exit(1);
}

mongoose.connect(uri, { dbName: 'pr24x7blog' })
    .then(() => {
        const maskedUri = uri.includes("@") ? uri.split("@")[1] : uri;
        console.log(`Connected to MongoDB for seeding: ${maskedUri}`);
    })
    .catch(err => console.error(err));

const seedPosts = [
    {
        title: "Mastering the Art of Digital Storytelling",
        slug: "mastering-digital-storytelling",
        excerpt: "In today's digital age, storytelling is more than just words. It's about creating an immersive experience...",
        content: "Full content here...",
        date: new Date("2025-10-24"),
        image: "https://picsum.photos/seed/pr1/800/600",
        category: "Digital Marketing"
    },
    {
        title: "The Future of Public Relations in 2026",
        slug: "future-of-public-relations",
        excerpt: "As technology evolves, so does the landscape of PR. From AI-driven analytics to hyper-personalized outreach...",
        content: "Full content here...",
        date: new Date("2025-10-18"),
        image: "https://picsum.photos/seed/pr2/800/600",
        category: "Public Relations"
    },
    {
        title: "Crisis Management: A Guide for Modern Brands",
        slug: "crisis-management-guide",
        excerpt: "When a crisis hits, every second counts. Learn the essential strategies to protect your brand's reputation...",
        content: "Full content here...",
        date: new Date("2025-10-10"),
        image: "https://picsum.photos/seed/pr3/800/600",
        category: "Crisis Management"
    },
    {
        title: "Leveraging Influencer Partnerships for Growth",
        slug: "influencer-partnerships",
        excerpt: "Influencer marketing is no longer a buzzword—it's a powerhouse strategy. Discover how to identify the right partners...",
        content: "Full content here...",
        date: new Date("2025-09-28"),
        image: "https://picsum.photos/seed/pr4/800/600",
        category: "Social Media"
    }
];

const seedDB = async () => {
    await Post.deleteMany({});
    await Post.insertMany(seedPosts);
    console.log("Database seeded!");
    mongoose.connection.close();
};

seedDB();
