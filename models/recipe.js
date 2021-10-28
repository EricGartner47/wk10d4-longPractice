'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
  }, {});
  Recipe.associate = function(models) {
    const columnMapping = {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
      hooks:true
    }
    Recipe.hasMany(models.Instruction, columnMapping);
    Recipe.hasMany(models.Ingredient,columnMapping)
  };
  return Recipe;
};
