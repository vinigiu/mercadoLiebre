const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
const db = require('../../models');

const usersController = {
    cadastro: (req, res) => {
        res.render('registerUser')
    },

    salvaCadastro: async (req, res) => {
		const novoUser = {full_name:null, email:null, date_birth:null, gender:null, password:null};
		novoUser.full_name = req.body.full_name;
		novoUser.email = req.body.email;
		novoUser.date_birth = req.body.date_birth;
		novoUser.gender = req.body.gender;
		novoUser.password = bcrypt.hashSync(req.body.password, 10);

		await db.User.create(novoUser)
        // users.push(novoUser);
        // let usersJSON = JSON.stringify(users,null,4);
        // fs.writeFileSync(usersFilePath, usersJSON)

        res.redirect('/user/login')
    },
    
    login: (req, res) => {
		res.render('login')
	},

	loginExec: async (req, res) => {
		let email = req.body.email;
		let password = req.body.password;
		
		if(await db.User.findOne({where: {email: email}})) {
			var user = await db.User.findOne({where: {email: email}})
		} else {
			return res.send("Email inválido")
		};

		let emailDb = user.email;
		let passwordDb = user.password;

		if (email != await emailDb) {
			return res.send("Email inválido")
		}
		if (!await bcrypt.compare(password, passwordDb)) {
			return res.send("Senha inválida")
		}
		
		return res.render('profile',{user:user})
	}
}

module.exports = usersController