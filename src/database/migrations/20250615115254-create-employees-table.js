'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        departmentId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'departments',
            key: 'id',
          },
          onDelete: 'CASCADE'
        },
        managerId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'employees',
            key: 'id'
          },
          onDelete: 'CASCADE'
        },
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employees')
  }
};