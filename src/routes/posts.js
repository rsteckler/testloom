const express = require("express");
const { getAllPosts, getPostById, createPost } = require("../data/posts");
const { validatePost } = require("../middleware/validate");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllPosts());
});

router.get("/:id", (req, res) => {
  const post = getPostById(Number(req.params.id));
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

router.post("/", validatePost, (req, res) => {
  const { title, content } = req.body;
  const post = createPost(title, content);
  res.status(201).json(post);
});

module.exports = router;
