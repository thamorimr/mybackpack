'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attraction_Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attractionId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Attractions',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      routeId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Routes',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Attraction_Routes');
  }
};