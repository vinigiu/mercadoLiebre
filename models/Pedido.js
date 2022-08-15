function Pedido (sequelize,Datatypes) {
    let nome = 'Pedido';
    let cols = 
    {
        status:{type: Datatypes.STRING},
        forma_pagto: {type: Datatypes.FLOAT},
    };
    let configs = 
    {
        tableName: 'pedidos',
        timestamps: false
    };
    const Pedido = sequelize.define(nome, cols, configs)
    return Pedido;
};

Pedido.associate = (models) => {
    Pedido.belongsToMany(models.Produto,{
        as: "produto_pedido",
        through: "pedidos_has_produtos",
        foreignKey: "pedido_id"
    })
}

Pedido.associate = (models) => {
    Pedido.belongsTo(models.User,{
        as: "pedido_user",
        foreignKey: "user_id"
    })
}

module.exports = Pedido; 