const postRouter = require('express').Router();
const { createPost, getAllPost, updatePost, deletePost } = require('../../controllers/auth/postController');
const { authMiddleware } = require('../../middleware/auth');

postRouter.post('/', authMiddleware, createPost);
postRouter.get('/', getAllPost);
postRouter.put('/:postId', authMiddleware, updatePost);
postRouter.delete('/:postId', authMiddleware, deletePost);

module.exports = postRouter;
