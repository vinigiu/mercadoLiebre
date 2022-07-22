let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

function admin (req,res,next) {
    let user = req.query.user;
    if(user) {
        admins.forEach(function(admin){
            if(user == admin){
                next();
            }
        });
    }else {
        res.send('Você não tem privilégios para acessar');
    };
}

module.exports = admin;