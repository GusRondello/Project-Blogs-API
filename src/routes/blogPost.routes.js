const { Router } = require('express');
const blogPostController = require('../controllers/blogPostController');

const blogPostRouter = Router();

blogPostRouter.get('/', blogPostController.list);
blogPostRouter.get('/search', blogPostController.search);
blogPostRouter.get('/:id', blogPostController.listById);
blogPostRouter.post('/', blogPostController.create);
blogPostRouter.put('/:id', blogPostController.update);
blogPostRouter.delete('/:id', blogPostController.delete);

module.exports = blogPostRouter;