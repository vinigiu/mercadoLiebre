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
	edit: async (req, res) => {
		let productID = req.params.id;
		const produto = await db.Produto.findByPk(productID);

		// const product = products.find(element => element.id == productID)
		res.render('product-edit-form', {produto:produto})
	},
	// Update - Method to update
	update: async (req, res) => {
		let productID = req.params.id;
		let produto = await db.Produto;
		
		await produto.update({
			nome_prod: req.body.nome,
			preco: Number(req.body.preco.replace(',','.')),
			desconto: Number(req.body.desconto),
			categoria: req.body.categoria,
			descricao: req.body.descricao,
			img: req.file.filename,
		}, {where: {id:productID}})

		let produtoFiltrado = await db.Produto.findByPk(productID);
	
		res.render('product-edit-form', {produto:produtoFiltrado})
	},

	// Delete - Delete one product from DB
	destroy : async (req, res) => {
		let productID = req.params.id;
		let produto = await db.Produto;
		await produto.destroy({where: {id: productID}})
		// let index = req.params.id - 1
    	// products.splice(index, 1);
		// let productsJSON = JSON.stringify(products)
		// fs.writeFileSync(productsFilePath, productsJSON)

		res.render('product-create-form')
	}
};

module.exports = controller;