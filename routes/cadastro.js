let express = require ('express');
let router = express.Router();
let cadastroController = require('../controllers/cadastroController');
router.get('./cadastro', cadastroController.viewCadastro)
router.post('/cadastro', cadastroController.store)
router.get ('/cadastro', cadastroController.create)




module.exports = router