const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let visitados = [];
		for (product of products) {
			if (product.category == "visited") {
				visitados.push(product)
			}
		};
		let ofertas = [];
		for (product of products) {
			if (product.category == "in-sale") {
				ofertas.push(product)
			}
		};
		res.render('index', {visitados:visitados, ofertas:ofertas} )
	},

	search: (req, res) => {
		// Do the magic
	},

	sale: (req,res) => {
		let ofertas = [];
		for (product of products) {
			if (product.category == "in-sale") {
				ofertas.push(product)
			}
		};
		res.render('insale', {ofertas:ofertas} )
	},

	admin: (req,res) => {
		res.render('admin', {user:req.query.user})
	}
};

module.exports = controller;
