const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.list);
categoryRouter.post('/', categoryController.create);

module.exports = categoryRouter;