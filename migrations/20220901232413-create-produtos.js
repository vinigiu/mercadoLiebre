'use strict';

module.exports = {
  async up (queryInterface, Datatypes) {
    await queryInterface.createTable('produtos',
    {
      nome_prod:{type: Datatypes.STRING(100)},
      preco: {type: Datatypes.FLOAT},
      desconto: {type: Datatypes.INTEGER(11)},
      categoria: {type: Datatypes.STRING(100)},
      descricao: {type: Datatypes.STRING},
      img: {type: Datatypes.STRING(100)}
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
