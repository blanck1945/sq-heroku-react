'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tech.init({
    tech_name: DataTypes.STRING,
    tech_type: DataTypes.STRING,
    tech_field: DataTypes.STRING,
    tech_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tech',
    tableName: "techs",
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    }
  });
  return Tech;
};