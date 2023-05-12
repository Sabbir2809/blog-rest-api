const { signupControllers, loginControllers } = require('../../controllers/auth/authControllers');

const authRouter = require('express').Router();

authRouter.post('/signup', signupControllers);

authRouter.post('/login', loginControllers);

module.exports = authRouter;
