'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Users, {
        foreignKey: 'teacherId',  as: 'teacher'
      })
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
        model: 'Users',
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