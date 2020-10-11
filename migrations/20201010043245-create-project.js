'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_type: {
        type: Sequelize.STRING,
        alloNull: false
      },
      project_desc: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      project_URL: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_github: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_img: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_state: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      project_front: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      project_back: {
        type: Sequelize.JSONB(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      project_back: Sequelize.JSONB(Sequelize.STRING),
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};