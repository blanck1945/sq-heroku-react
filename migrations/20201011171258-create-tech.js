'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('techs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tech_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tech_type: {
        type: Sequelize.ENUM,
        values: [
          "Lenguaje", "Librería", "Framework", "Query-Builder", "ORM", "Base de Datos", "Control de Versiones", "Modulador de Paquetes"
        ],
        allowNull: false
      },
      tech_field: {
        type: Sequelize.JSONB(Sequelize.STRING),
        allowNull: false
      },
      tech_img: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('techs');
  }
};