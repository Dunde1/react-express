//테스트 시드

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [];

    new Array(10).fill(0).forEach((v, i) => seeds.push(
      {
        name: `tester${i}`,
        password: `pw${i}`
      }
    ));

    return queryInterface.bulkInsert("Tests", seeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tests", null, {});
  }
};
