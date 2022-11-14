'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('student', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
        defaultValue: 40,
        
      },
      parentId:{
        type:DataTypes.UUID,
        allowNull:false
      },
      classId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1
      },
      
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('student');
  }
};