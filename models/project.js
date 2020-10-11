'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {

    async beforeCreate(modelInstance) {
      return await {
        ...modelInstance,
        project_state: true
      }
    }

    static associate(models) {
      // define association here
    }
  };
  Project.init({
    project_name: DataTypes.STRING,
    project_type: DataTypes.STRING,
    project_desc: DataTypes.TEXT,
    project_URL: DataTypes.STRING,
    project_github: DataTypes.STRING,
    project_state: DataTypes.BOOLEAN,
    project_img: DataTypes.STRING,
    project_front: DataTypes.JSONB(DataTypes.STRING),
    project_back: DataTypes.JSONB(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects'
  });
  return Project;
};