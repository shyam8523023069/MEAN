const express = require('express') 
const router = express.Router()

const LoginController = require('../controllers/Login')


router.get('/details', LoginController.details)
router.post('/', LoginController.login)
router.post('/register', LoginController.register)
module.exports = router