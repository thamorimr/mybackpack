'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Route.belongsTo(models.Citie);
      Route.hasMany(models.DangerousPlace_Route);
      Route.hasMany(models.Attraction_Route);
    }
  }
  Route.init({
    DescRoute: DataTypes.STRING,
    Distance: DataTypes.STRING,
    citieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};