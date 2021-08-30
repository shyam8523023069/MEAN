const express = require('express') 
const router = express.Router()

const LoginController = require('../controllers/Login')
const authenticate = require('../middlewate/Authenticate')

router.get('/details', authenticate, LoginController.details)
router.post('/', LoginController.login)
router.post('/register', LoginController.register)
module.exports = router