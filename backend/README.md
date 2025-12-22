# Backend API for PR 24x7 Blog

This is the Node.js/Express backend for the blog section.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    Create a `.env` file in this directory with your MongoDB connection string (optional, defaults to local):
    ```
    MONGO_URI=mongodb://localhost:27017/pr24x7blog
    PORT=5000
    ```

3.  **Seed Database** (Optional, for initial data):
    ```bash
    node seed.js
    ```

4.  **Run Server**:
    ```bash
    node server.js
    ```
    or for development with nodemon (if installed):
    ```bash
    npx nodemon server.js
    ```

## API Endpoints

*   `GET /api/posts`: Get paginated blog posts.
*   `GET /api/posts/:slug`: Get a single post.
*   `POST /api/posts`: Create a new post.
