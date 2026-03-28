# Blog API

Express.js backend API for a blog application with in-memory storage.

## Setup

```bash
npm install
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server runs on `http://localhost:3000`.

## API Endpoints

### GET /api/posts

Returns all blog posts.

**Response:** `200 OK`

```json
[
  {
    "id": 1,
    "title": "Getting Started with Express.js",
    "content": "Express.js is a minimal and flexible...",
    "createdAt": "2026-03-25T10:00:00.000Z"
  }
]
```

### GET /api/posts/:id

Returns a single blog post by ID.

**Response:** `200 OK` or `404 Not Found`

### POST /api/posts

Creates a new blog post.

**Request body:**

```json
{
  "title": "My Post Title",
  "content": "The post content here."
}
```

**Response:** `201 Created`

```json
{
  "id": 4,
  "title": "My Post Title",
  "content": "The post content here.",
  "createdAt": "2026-03-27T12:00:00.000Z"
}
```

**Validation errors:** `400 Bad Request` if title or content is missing/empty.

## Project Structure

```
src/
  index.js           # App entry point
  routes/posts.js    # Post route handlers
  middleware/validate.js  # Request validation
  data/posts.js      # In-memory data store with seed data
```
