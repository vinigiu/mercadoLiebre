const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../../models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: async (req, res) => {
		const visitados = await db.Produto.findAll({where:{categoria:'visited'}})
		const ofertas = await db.Produto.findAll({where:{categoria:'in-sale'}})
		res.render('index', {visitados:visitados, ofertas:ofertas} )
	},

	search: (req, res) => {
		// Do the magic
	},

	sale: async (req,res) => {
		const ofertas = await db.Produto.findAll({where:{categoria:'in-sale'}})
		res.render('insale', {ofertas:ofertas} )
	},

	admin: (req,res) => {
		res.render('admin', {user:req.query.user})
	}
};

module.exports = controller;
