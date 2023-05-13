// Dependencies
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Access Not Allow!' });
    }
    const sToken = token.split(' ')[1];
    const decoded = jwt.verify(sToken, process.env.PRIVATE_KEY);
    const id = decoded.id;

    const user = await userModel.findById(id);
    req.user = user;

    next();

    // console.log(token);
  } catch (error) {
    res.status(401).json({ message: 'Authenticate Failed!' });
  }
};
