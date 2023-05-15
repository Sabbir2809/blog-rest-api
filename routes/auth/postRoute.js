const postRouter = require('express').Router();
const { createPost, getAllPost } = require('../../controllers/auth/postController');
const { authMiddleware } = require('../../middleware/auth');

postRouter.post('/', authMiddleware, createPost);
postRouter.get('/', getAllPost);

module.exports = postRouter;
