'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dataproject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dataproject.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    startDateId: DataTypes.STRING,
    endDateId: DataTypes.STRING,
    duration: DataTypes.STRING,
    tech: DataTypes.JSON,
    author: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dataproject',
  });
  return dataproject;
};