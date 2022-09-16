var express = require('express');
var loginController = require ('../controllers/loginController');
var router = express.Router();
let cadastroController = require ('../controllers/cadastroController')
let UserController = require ('../controllers/UserController');


// Rota Principal
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//controllers
router.get('/login', loginController.viewLogin)
router.get('/cadastro', cadastroController.viewCadastro)
router.get ('/users', UserController.index)




module.exports = router;
