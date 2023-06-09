const categoryModel = require('../models/categoryModel');

// create post
exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await categoryModel.create({
      name,
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(401).json({ message: 'Something Went Wrong!', error });
  }
};

// get category
exports.getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find();

    res.status(200).json(category);
  } catch (error) {
    res.status(401).json({ message: 'Something Went Wrong!', error });
  }
};
