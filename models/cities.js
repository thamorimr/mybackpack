'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cities.hasMany(models.Route);
      // define association here
    }
  }
  Cities.init({
    City: DataTypes.STRING,
    Country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cities',
  });
  return Cities;
};