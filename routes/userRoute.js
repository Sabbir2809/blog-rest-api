// Dependencies
const userRoute = require('express').Router();
const { getAllUser, updateUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/auth');

userRoute.get('/', authMiddleware, getAllUser);
userRoute.put('/:userId', authMiddleware, updateUser);

// export userRoute
module.exports = userRoute;
