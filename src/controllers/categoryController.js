const jwtMiddleware = require('../middlewares/jwtMiddleware');
const categoryService = require('../services/categoryService');

const categoryController = {
    create: async (req, res) => {
        jwtMiddleware.validateToken(req.headers.authorization);
        const { name } = categoryService.validateBody(req.body);
        const category = await categoryService.create(name);
        res.status(201).json(category);
    },

    list: async (req, res) => {
        jwtMiddleware.validateToken(req.headers.authorization);
        const categories = await categoryService.list();
        res.status(200).json(categories);
    },
};

module.exports = categoryController;