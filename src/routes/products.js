// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Configurando o Multer ************
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, 'C:/Users/vinig/Desktop/meusProjetos/praticaExpress/CRUD 1/materiais/public/images/products')
    },
    filename:(req,file,callback) => {
        callback(null, Date.now() + file.originalname)
    }
});

const upload = multer({storage:storage});

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', upload.single('fileImg'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id',upload.single('fileImg'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
