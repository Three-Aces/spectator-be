'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('roles', [{
       id: 1,
       roleName: 'head teacher',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       id: 2,
       roleName: 'deputy of discipline',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        id: 3,
        roleName: 'deputy of studies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        roleName: 'patron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        roleName: 'matron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        roleName: 'parent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        roleName: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        roleName: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
