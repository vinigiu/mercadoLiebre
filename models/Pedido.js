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
    Pedido.associate = (models) => {
        Pedido.belongsToMany(models.Produto,{
            as: "pedido_produto",
            through: "pedidos_has_produtos",
            foreignKey: "pedido_id",
            otherKey: "produto_id",
            timestamps:false
        })
    }
    
    Pedido.associate = (models) => {
        Pedido.belongsTo(models.User,{
            as: "pedido_user",
            foreignKey: "user_id"
        })
    }
    return Pedido;
};


module.exports = Pedido; 