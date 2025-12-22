import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        default: "PR 24x7",
    },
    category: {
        type: String,
        required: false,
    }
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
