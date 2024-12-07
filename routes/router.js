const express = require('express')
const userController = require('../controller/userController')
const authenticate = require('../middleware/authentication')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login 

router.post('/login',userController.loginController)

// alluser

router.get('/all-users',authenticate,userController.allUsers)

module.exports = router