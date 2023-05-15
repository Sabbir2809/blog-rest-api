const categoryRouter = require('express').Router();
const { createCategory, getCategory } = require('../controllers/categoryController');

categoryRouter.post('/', createCategory);
categoryRouter.get('/', getCategory);

module.exports = categoryRouter;
