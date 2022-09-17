'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attraction_Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attraction_Route.belongsTo(models.Route);
      Attraction_Route.belongsTo(models.Attraction);
    }
  }
  Attraction_Route.init({
    attractionId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attraction_Route',
  });
  return Attraction_Route;
};