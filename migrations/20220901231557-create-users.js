'use strict';

module.exports = {
  async up (queryInterface, Datatypes) {
    await queryInterface.createTable('users',
    {
      full_name:{type: Datatypes.STRING(200)},
      email: {type: Datatypes.STRING(100)},
      date_birth: {type: Datatypes.DATE},
      gender: {type: Datatypes.STRING(45)},
      password: {type: Datatypes.STRING(100)},
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
