// Dependencies
const userRoute = require('express').Router();
const { getAllUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/auth');

userRoute.get('/', authMiddleware, getAllUser);

// export userRoute
module.exports = userRoute;
