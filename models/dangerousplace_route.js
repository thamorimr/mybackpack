'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DangerousPlace_Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DangerousPlace_Route.belongsTo(models.DangerousPlace);
      DangerousPlace_Route.belongsTo(models.Route);
    }
  }
  DangerousPlace_Route.init({
    dangerousplaceId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DangerousPlace_Route',
  });
  return DangerousPlace_Route;
};