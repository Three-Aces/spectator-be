'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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