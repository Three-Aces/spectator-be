'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  Chat.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: true,
      type: DataTypes.UUID
    },
    message: DataTypes.STRING,
    timeStamp: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};