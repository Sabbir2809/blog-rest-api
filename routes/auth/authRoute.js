// Dependencies
const authRouter = require('express').Router();
const { signupControllers, loginControllers } = require('../../controllers/auth/authControllers');

// signup route
authRouter.post('/signup', signupControllers);

// login route
authRouter.post('/login', loginControllers);

// export authRouter
module.exports = authRouter;
