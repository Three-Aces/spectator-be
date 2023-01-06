'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentReport extends Model {
    static associate(models) {
      // define association here
    }
  }
  StudentReport.init({
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    attend: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    comment: {
      type: DataTypes.STRING,
      defaultValue: 'No Comment'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StudentReport',
  });
  return StudentReport;
};