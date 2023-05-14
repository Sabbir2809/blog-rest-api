// Dependencies
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// gel all user
exports.getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: 'Something went Wrong!', error });
  }
};

// update profile
exports.updateUser = async (req, res) => {
  const userId = req.params.userId;
  try {
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

// delete profile
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'Wrong User!' });
    }
    const deletedUser = await userModel.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User Deleted Successfully.', deletedUser });
  } catch (error) {
    res.status(400).json({ message: 'You can deleted only your account!', error });
  }
};
