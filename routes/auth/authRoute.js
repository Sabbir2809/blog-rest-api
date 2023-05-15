// Dependencies
const authRouter = require('express').Router();
const { signup, login } = require('../../controllers/auth/authControllers');

// signup route
authRouter.post('/signup', signup);

// login route
authRouter.post('/login', login);

// export authRouter
module.exports = authRouter;
