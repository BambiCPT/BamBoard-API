'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('departments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(255),
    },
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('departments')
  }
};
