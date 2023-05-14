// Dependencies
const userRouter = require('express').Router();
const { getAllUser, updateUser, deleteUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/auth');

userRouter.get('/', authMiddleware, getAllUser);
userRouter.put('/:userId', authMiddleware, updateUser);
userRouter.delete('/:userId', authMiddleware, deleteUser);

// export userRoute
module.exports = userRouter;
