// Dependencies

const userModel = require('../models/userModel');

exports.getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: 'Something went Wrong!' });
  }
};
