const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.list);
userRouter.get('/:id', userController.listById);
userRouter.delete('/me', userController.delete);

module.exports = userRouter;