// ************ Require's ************
const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middlewares/admin')

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/*** GET HOME PAGE ***/
router.get('/', mainController.index); 

/*** GET SEARCH RESULT ***/
router.get('/search', mainController.search);

/*** GET ON SALE PRODUCTS ***/
router.get('/sale', mainController.sale)

/*** GET ADMIN PAGE ***/
router.get('/admin', adminMiddleware, mainController.admin );

module.exports = router;
