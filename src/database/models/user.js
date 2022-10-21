'use strict';
const {
  Model, json
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasOne(models.Role, {
        foreignKey: "role",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
   toJSON(){
    return {...this.get(), id: undefined}
   }
  }
  User.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};