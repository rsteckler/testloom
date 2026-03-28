const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// In-memory storage
const posts = [];
let nextId = 1;

// GET /api/posts - Retrieve all blog posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// GET /api/posts/:id - Retrieve a single blog post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
});

// POST /api/posts - Create a new blog post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const post = {
    id: nextId++,
    title,
    content,
    timestamp: new Date().toISOString(),
  };

  posts.push(post);
  res.status(201).json(post);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(`${new Date().toISOString()} Error:`, err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Blog API server running on http://localhost:${PORT}`);
});
