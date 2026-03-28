function validatePost(req, res, next) {
  const { title, content } = req.body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Title is required and must be a non-empty string" });
  }

  if (!content || typeof content !== "string" || !content.trim()) {
    return res.status(400).json({ error: "Content is required and must be a non-empty string" });
  }

  req.body.title = title.trim();
  req.body.content = content.trim();
  next();
}

module.exports = { validatePost };
