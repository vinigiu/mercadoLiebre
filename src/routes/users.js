// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

router.get('/cadastrar', usersController.cadastro)
router.post('/cadastrar', usersController.salvaCadastro)

router.get('/login', usersController.login)
router.post('/login', usersController.loginExec)

module.exports = router;