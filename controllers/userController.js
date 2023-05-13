// Dependencies
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// gel all user
exports.getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: 'Something went Wrong!' });
  }
};

// update profile
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'Wrong User!' });
    }
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const updateUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json({ message: 'Profile Updated Successfully.', updateUser });
  } catch (error) {
    res.status(401).json({ message: 'You can update only your Account!' });
  }
};
