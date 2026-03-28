let nextId = 4;

const posts = [
  {
    id: 1,
    title: "Getting Started with Express.js",
    content:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications with Node.js.",
    createdAt: new Date("2026-03-25T10:00:00Z").toISOString(),
  },
  {
    id: 2,
    title: "Understanding RESTful APIs",
    content:
      "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources.",
    createdAt: new Date("2026-03-26T14:30:00Z").toISOString(),
  },
  {
    id: 3,
    title: "JavaScript Array Methods You Should Know",
    content:
      "JavaScript arrays come with powerful built-in methods like map, filter, reduce, and forEach. Mastering these methods will make your code more concise and readable.",
    createdAt: new Date("2026-03-27T09:00:00Z").toISOString(),
  },
];

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => post.id === id);
}

function createPost(title, content) {
  const post = {
    id: nextId++,
    title,
    content,
    createdAt: new Date().toISOString(),
  };
  posts.push(post);
  return post;
}

module.exports = { getAllPosts, getPostById, createPost };
