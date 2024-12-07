const express = require('express')
const userController = require('../controller/userController')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login 

router.post('/login',userController.loginController)

// alluser

router.get('/all-users',userController.allUsers)

module.exports = router