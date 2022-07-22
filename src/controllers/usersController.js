const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const usersController = {
    cadastro: (req, res) => {
        res.render('registerUser')
    },

    salvaCadastro: (req, res) => {
        let novoUser = req.body;
        users.push(novoUser);
        let usersJSON = JSON.stringify(users,null,4);
        fs.writeFileSync(usersFilePath, usersJSON)

        console.log('req.body = ', req.body)

        res.render('login')
    },
    
    login: (req, res) => {
		res.render('login')
	},

	loginExec: (req, res) => {
		let{email, password} = req.body;
		if (email != users.email) {
			res.send("usuário inválido")
		}
		if (password != users.password) {
			res.send("senha inválida")
		}

		console.log("req.body = ", req.body)

		res.render('profile',{user:req.query.fullName})
	},
}

module.exports = usersController