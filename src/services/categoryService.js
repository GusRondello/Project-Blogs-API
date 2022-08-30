const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../middlewares/validator');

const categoryService = {

    validateBody: runSchema(Joi.object({
        name: Joi.string().required().messages({
            'any.required': '"name" is required',
            'string.empty': '"name" is required',
        }),
    })),

    checkIfExists: async (idArray) => {
        const checked = await db.Category.findAndCountAll({
            where: { id: idArray },
        });
        
        if (idArray.length !== checked.count) {
            const error = new Error('"categoryIds" not found');
            error.name = 'ValidationError';
            throw error;
        }

        return checked;
    },

    create: async (name) => {
        const category = await db.Category.create({ name });
        return category;
    },

    list: async () => {
        const categories = await db.Category.findAll();
        return categories;
    },
};

module.exports = categoryService;