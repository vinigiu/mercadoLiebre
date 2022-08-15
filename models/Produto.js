function Produto (sequelize,Datatypes) {
    let nome = 'Produto';
    let cols = 
    {
        nome_prod:{type: Datatypes.STRING},
        preco: {type: Datatypes.FLOAT},
        desconto: {type: Datatypes.INTEGER},
        categoria: {type: Datatypes.STRING},
        descricao: {type: Datatypes.STRING},
        img: {type: Datatypes.STRING}
    };
    let configs = 
    {
        tableName: 'produtos',
        timestamps: false
    };
    const Produto = sequelize.define(nome, cols, configs)
    return Produto;
};

Produto.associate = (models) => {
    Produto.belongsToMany(models.Pedido,{
        as: "Pedido",
        through: "pedidos_has_produtos",
        foreignKey: "produto_id"
    })
}

module.exports = Produto; 