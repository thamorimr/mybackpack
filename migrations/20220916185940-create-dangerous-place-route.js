'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DangerousPlace_Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dangerousplaceId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'DangerousPlaces',
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
    await queryInterface.dropTable('DangerousPlaces_Routes');
  }
};