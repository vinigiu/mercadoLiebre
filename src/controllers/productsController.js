const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products:products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productID = req.params.id;
		const product = products.find(element => element.id == productID)
		res.render('detail', {product:product} )
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const newProduct = {id:null,name:null,description:null,price:null,discount:null,image:null,category:null}
		const arraylast = products.pop() //para pegar o ultimo produto da lista
		//atribuindo valores do produto
		newProduct.id = arraylast.id + 1 ;
		newProduct.name = req.body.name;
		newProduct.description = req.body.description;
		newProduct.price = req.body.price;
		newProduct.discount = req.body.discount;
		newProduct.image = req.file.filename;
		newProduct.category = req.body.category;
		//escrevendo a lista de produtos atualizada na base de dados JSON
		products.push(arraylast);
		products.push(newProduct);
		let productsJSON = JSON.stringify(products,null,4)
		fs.writeFileSync(productsFilePath, productsJSON)

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