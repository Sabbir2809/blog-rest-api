const categoryRouter = require('express').Router();
const { createCategory } = require('../controllers/categoryController');

categoryRouter.post('/', createCategory);

module.exports = categoryRouter;
