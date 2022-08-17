function User (sequelize,Datatypes) {
    let nome = 'User';
    let cols = 
    {
        full_name:{type: Datatypes.STRING},
        email: {type: Datatypes.STRING},
        date_birth: {type: Datatypes.DATE},
        gender: {type: Datatypes.STRING},
        password: {type: Datatypes.STRING},
    };
    let configs = 
    {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(nome, cols, configs)
    User.associate = (models) => {
        User.hasMany(models.Pedido,{
            as: "user_pedido",
            foreignKey: "user_id"
        })
    }
    return User;
};


module.exports = User; 