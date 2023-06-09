const postModel = require('../models/postModel');

// create post
exports.createPost = async (req, res) => {
  const { title, body, username, category, photo } = req.body;
  try {
    const post = await postModel.create({
      title,
      body,
      username,
      category,
      photo,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(401).json({ message: 'Something Went Wrong!', error });
  }
};

// get all post by username or category
exports.getAllPost = async (req, res) => {
  const { username, category } = req.query;
  try {
    let posts;
    if (username) {
      posts = await postModel.find({ username });
    } else if (category) {
      posts = await postModel.find({ category: { $in: [category] } });
    } else {
      posts = await postModel.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(401).json({ message: 'Something Went Wrong', error });
  }
};

// get single post
exports.getSinglePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await postModel.findById(postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: 'Something went Wrong!', error });
  }
};

// update post
exports.updatePost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(400).json({ message: 'Post Not Found' });
    }
    const updatePost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
    res.status(200).json({ massage: 'Post Update Successfully', updatePost });
  } catch (error) {
    res.status(401).json({ message: 'You can update only your post!', error });
  }
};

// delete post
exports.deletePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(400).json({ message: 'Post Not Found' });
    }
    await postModel.findByIdAndDelete(post);
    res.status(200).json({ message: 'Post Deleted Successfully.' });
  } catch (error) {
    res.status(401).json({ message: 'You can delete only your Post', error });
  }
};
