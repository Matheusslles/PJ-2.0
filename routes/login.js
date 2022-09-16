let express = require ('express');
let router = express.Router();
let loginController = require ('../controllers/loginController')
//router.post ('/login', loginController.viewLogin)
router.get ('/login', loginController.viewLogin)


module.exports = router