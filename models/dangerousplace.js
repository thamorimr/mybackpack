'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DangerousPlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DangerousPlace.hasMany(models.DangerousPlace_Route)
    }
  }
  DangerousPlace.init({
    Address: DataTypes.STRING,
    Desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DangerousPlace',
  });
  return DangerousPlace;
};