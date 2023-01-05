'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Students,{
        foreignKey:'classId', as: 'class'
      })
    }
  }
  Class.init({
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'S1'
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    sequelize,
    modelName: 'Class',
    tableName:'class'
  });
  return Class;
};