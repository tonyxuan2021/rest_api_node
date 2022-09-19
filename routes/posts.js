const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
    // find() is a mongoose method
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST

router.get("/:postId", async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }

  //a promise to chain up data
});

// Delete a Post

// router.delete()

module.exports = router;
