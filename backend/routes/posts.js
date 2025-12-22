import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// GET all posts with pagination
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;

    try {
        const posts = await Post.find()
            .sort({ date: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Post.countDocuments();

        res.json({
            posts,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET single post by slug
router.get('/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CREATE a post (for seeding/admin)
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
