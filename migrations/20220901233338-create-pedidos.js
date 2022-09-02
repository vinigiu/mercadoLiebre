'use strict';

module.exports = {
  async up (queryInterface, Datatypes) {
    await queryInterface.createTable('pedidos', 
    {
      status:{type: Datatypes.STRING},
      forma_pagto: {type: Datatypes.FLOAT},
      user_id: {type: Datatypes.INTEGER, references:{model:{tablename:'users', schema:'mercado_liebre'},key:'id'}},
      produto_id: {type: Datatypes.INTEGER, references:{model:{tablename:'produtos', schema: 'mercado_liebre'},key:'id'}}
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};
