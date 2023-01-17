'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'teacherId',
        as:'courses'
      })
      this.hasMany(models.StudentReport, {
        foreignKey: 'courseId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      this.hasMany(models.Notification, {
        foreignKey: { name: "courseId", allowNull: true },
        as: "course",
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  Course.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    level: {
      type: DataTypes.ENUM('O-level', 'A-level', 'none'),
      allowNull: false,
      defaultValue: 'none'
    },
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};