# React Blog Frontend

A clean, modern blog application built with React and Vite. Connects to an Express backend API for creating and reading blog posts.

## Prerequisites

- Node.js 18+
- Backend API running at `http://localhost:3001` (Express server with `/api/posts` endpoints)

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

The app runs on **http://localhost:3000**.

## API Endpoints Used

| Method | Endpoint     | Description       |
|--------|-------------|-------------------|
| GET    | /api/posts  | Fetch all posts   |
| POST   | /api/posts  | Create a new post |

### POST /api/posts body

```json
{
  "title": "Post Title",
  "content": "Post body text"
}
```

## Features

- View all blog posts on the main page
- Create new posts with title and content
- Click any post to read the full content
- Loading states and error handling with retry
- Responsive, modern design
