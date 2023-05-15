const postModel = require('../../models/postModel');

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

// get all post
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
