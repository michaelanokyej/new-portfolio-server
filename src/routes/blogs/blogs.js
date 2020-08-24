const router = require("express").Router();
const Blog = require("../../models/Blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({_id:-1});
    res.json(blogs)
  } catch (err) {
    res.json({ message: err})
  }
})

router.get("/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  try {
    const blog = await Blog.findById(blogId);
    res.json(blog)
  } catch (err) {
    res.json({ message: err})
  }
})

router.post("/", async (req, res) => {
  const blog = new Blog ({
    title: req.body.title,
    description: req.body.description,
    blogimage: req.body.blogimage,
    blogvideo: req.body.blogvideo,
    blogbody: req.body.blogbody,
    blogtype: req.body.blogtype,
    links: req.body.links
  })
  try {
    const savedBlog = await blog.save();
    res.json(savedBlog)
  } catch (err) {
    res.json({ message: err})
  }
})

module.exports = router;