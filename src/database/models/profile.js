'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    }
  }
  Profile.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile_image: DataTypes.STRING(10000),
    sex: DataTypes.ENUM('male', 'female', 'others'),
    
    country: {
      type: DataTypes.STRING,
      defaultValue: 'Rwanda'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'profile',
    modelName: 'Profile',
  });
  return Profile;
};