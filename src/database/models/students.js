'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Class}) {
      // define association here
this.belongsTo(User,{foreignKey:'parentId'}),
this.belongsTo(User,{foreignKey:'classId'})
    }
  }
  Students.init({
    id:{
      allowNull: false,
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parentId:{
      type:DataTypes.UUID,
      allowNull:false
    },
    classId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
  
    marks: {
      type: DataTypes.INTEGER,
      

    },
  }, {
    sequelize,
    modelName: 'Students',
    tableName:'student'
  });
  return Students;
};