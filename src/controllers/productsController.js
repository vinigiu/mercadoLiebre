const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../../models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: async (req, res) => {
		const products = await db.Produto.findAll();
		res.render('products', {products:products})
	},

	// Detail - Detail from one product
	detail: async (req, res) => {
		let productID = req.params.id;
		const product = await db.Produto.findByPk(productID);
		res.render('detail', {product:product} )
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: async (req, res) => {
		const newProduct = {nome_prod:null,preco:null,desconto:null,categoria:null,descricao:null,img:null};
		newProduct.nome_prod = req.body.nome_prod;
		newProduct.descricao = req.body.descricao;
		newProduct.preco = Number(req.body.preco.replace(',','.'));
		newProduct.desconto = Number(req.body.desconto);
		newProduct.img = req.file.filename;
		newProduct.categoria = req.body.categoria;

		await db.Produto.create(newProduct);

		res.render('product-create-form')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productID = req.params.id;
		const product = products.find(element => element.id == productID)
		res.render('product-edit-form', {product:product})
	},
	// Update - Method to update
	update: (req, res) => {
		let productID = req.params.id;
		let product = products.find(element => element.id == productID)
			product.name = req.body.name;
			product.price = req.body.price;
			product.discount = req.body.discount;
			product.category = req.body.category;
			product.image = req.file.filename;
			product.description = req.body.description;
		let productsJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productsJSON)
		res.render('product-edit-form', {product:product})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let index = req.params.id - 1
    	products.splice(index, 1);
		let productsJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productsJSON)

		res.render('product-create-form')
	}
};

module.exports = controller;