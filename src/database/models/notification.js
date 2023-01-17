"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: { name: "userId", allowNull: false },
        as: "owner",
      });
      this.belongsTo(models.Course, {
        foreignKey: { name: "courseId", allowNull: true },
        as: "course",
      });
    }
  }
  Notification.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      title: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      message: { 
        type: DataTypes.STRING,
        allowNull: true 
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Courses',
          key: 'id'
        }
      },
      status: {
        type: DataTypes.ENUM(["delivered", "read"]),
        allowNull: false,
        defaultValue: "delivered",
      },
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
