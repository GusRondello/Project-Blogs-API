const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: DataTypes.INT,
    name: DataTypes.STRING,
  });


  return Category;
};

module.exports = Category;