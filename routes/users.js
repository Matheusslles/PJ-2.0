var express = require('express');
const Funcionario = require('../models/Usuario');
var router = express.Router();
const UserController = require ('../controllers/UserController')
router.get('/users', UserController.index)

module.exports = router;
