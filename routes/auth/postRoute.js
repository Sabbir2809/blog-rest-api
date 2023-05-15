const postRouter = require('express').Router();
const { createPost, getAllPost, updatePost } = require('../../controllers/auth/postController');
const { authMiddleware } = require('../../middleware/auth');

postRouter.post('/', authMiddleware, createPost);
postRouter.get('/', getAllPost);
postRouter.put('/:postId', authMiddleware, updatePost);

module.exports = postRouter;
