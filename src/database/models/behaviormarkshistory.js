'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BehaviorMarksHistory extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Students, {
        foreignKey: 'studentId',
        as: 'behavior-history'
      })
    }
  }
  BehaviorMarksHistory.init({
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    reducedMarks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BehaviorMarksHistory',
  });
  return BehaviorMarksHistory;
};