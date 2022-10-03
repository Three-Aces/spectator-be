'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
  },
    email:{
      type: DataTypes.STRING,
      unique: true,
      isEmail: true, //checks for email format
      allowNull: false
  },
    phone:{
      type: DataTypes.INTEGER,
      allowNull: false
  },
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};