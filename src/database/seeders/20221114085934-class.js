'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('class', [{
      id: 1,
      name: 'S1',
      group: 'A',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 2,
      name: 'S1',
      group: 'B',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
       id: 3,
       name: 'S1',
       group: 'C',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('class', null, {});
    
  }
};
