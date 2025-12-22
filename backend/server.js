import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import contactRoutes from './routes/contact.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

const ipKeyGenerator = (req) => {
    return req.ip || req.connection.remoteAddress;
};

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());
app.use(morgan("short"));
app.use(
    cors({
        origin: (origin, callback) => {
            const allowed = [process.env.FRONTEND_URL, process.env.VITE_API_URL, "http://localhost:5173", "http://localhost:5000"];
            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return callback(null, true);

            // Allow if origin is in the allowed list
            if (allowed.includes(origin)) return callback(null, true);

            // In production/vercel, same-origin requests often have no origin or match the domain.
            // For now, keeping it permissive for Vercel Preview deployments which generate dynamic URLs
            // ideally checking if it ends with .vercel.app
            if (origin.endsWith(".vercel.app") || process.env.NODE_ENV !== "production") {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
        allowedHeaders: ["Authorization", "Content-Type"],
    })
);

app.set("trust proxy", 1);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: (req) => (req.user ? 1000 : 100),
    message: "Too many requests, please try again later",
    standardHeaders: true,
    legacyHeaders: true,
    keyGenerator: (req) => ipKeyGenerator(req),
});
app.use(limiter);
// Routes
app.use('/api/posts', postRoutes);
app.use('/api/contact', contactRoutes);

// Database Connection
let isConnected = false;
export const connectDB = async () => {
    if (isConnected) return;
    try {
        const uri = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/pr24x7blog';
        await mongoose.connect(uri, { dbName: 'pr24x7blog' });
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

// Connect immediately/eagerly (optional, but good for local)
connectDB();


// Start Server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
