'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attraction.hasMany(models.Attraction_Route)
      // define association here
    }
  }
  Attraction.init({
    Name: DataTypes.STRING,
    Desc: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attraction',
  });
  return Attraction;
};