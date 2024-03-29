'use strict';
const {
  Model, json
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasOne(models.Role, {
        foreignKey: "roleName",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      this.hasMany(models.UserSession, {
        foreignKey: 'userId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      this.hasOne(models.Profile, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      this.hasMany(models.Students,{
        foreignKey:'parentId'
      });
      this.hasMany(models.Course, {
        foreignKey: 'teacherId',
        as:'courses'
      });
      this.hasMany(models.Chat, {
        foreignKey: 'userId'
      });
      this.hasMany(models.Notification, {
        foreignKey: { name: "userId", allowNull: false },
        as: "owner",
        onDelete: "CASCADE",
        onUpdate: "RESCRICT",
      });
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
      type: DataTypes.STRING,
      allowNull: false
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role: {
      type: DataTypes.STRING,
      references:{
        model: 'Role',
        key: 'roleName'
      }
    },
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};