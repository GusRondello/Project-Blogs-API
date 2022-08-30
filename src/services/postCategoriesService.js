const db = require('../database/models');

const postCategoriesService = {
    create: async (postId, categoryIds) => {
      const arrayInsert = categoryIds
                            .map((item) => item.dataValues.id)
                            .map((categoryId) => ({ postId, categoryId }));
      const postCategories = await db.PostCategory.bulkCreate(arrayInsert);
      console.log(postCategories);
      return postCategories;
    },
  };                                      
  
  module.exports = postCategoriesService;