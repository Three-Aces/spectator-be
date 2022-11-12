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
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sex: {
        type: DataTypes.STRING
      },
      school: {
        type: DataTypes.STRING
      },
      marks: {
        type: DataTypes.INTEGER,
        defaultValue:40,
        
      },
      parentId:{
        type:DataTypes.UUID,
        allowNull:false
      },
      classId:{
        type:DataTypes.INTEGER,
        allowNull:false
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