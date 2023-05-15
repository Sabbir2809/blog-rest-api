const postRouter = require('express').Router();
const {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
  getSinglePost,
} = require('../controllers/postController');
const { authMiddleware } = require('../middleware/auth');

postRouter.post('/', authMiddleware, createPost);
postRouter.get('/', getAllPost);
postRouter.get('/:postId', getSinglePost);
postRouter.put('/:postId', authMiddleware, updatePost);
postRouter.delete('/:postId', authMiddleware, deletePost);

module.exports = postRouter;
