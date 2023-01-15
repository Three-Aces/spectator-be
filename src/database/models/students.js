'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    static associate({User, Class, BehaviorMarksHistory}) {
      // define association here
    this.belongsTo(User,{foreignKey:'parentId'}),
    this.belongsTo(Class,{foreignKey:'classId', as: 'class'})
    this.hasMany(BehaviorMarksHistory, {
      foreignKey: 'studentId',
      as: 'behavior-history'
    })
    }
  }
  Students.init({
    id:{
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false,
      defaultValue: 'other'
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Ecole Secondary Bumbogo'
    },
    marks: {
      type: DataTypes.INTEGER,
      defaultValue: 40

    },
    parentId:{
      type:DataTypes.UUID,
      allowNull:false,
      references: 'User',
      key: 'id'
    },
    classId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references: 'Class',
      key:'id',
      defaultValue: 1
    },
  }, {
    sequelize,
    modelName: 'Students',
    tableName:'student'
  });
  return Students;
};