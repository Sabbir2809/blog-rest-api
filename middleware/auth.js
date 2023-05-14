// Dependencies
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Verify
exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized, Access Not Allow!' });
    }
    const sToken = token.split(' ')[1];
    const decoded = jwt.verify(sToken, process.env.PRIVATE_KEY);
    const id = decoded.id;

    const user = await userModel.findById(id);
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authenticate Failed!' });
  }
};
