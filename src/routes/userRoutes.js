const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const {authToken} = require('../middlewares/authMidlleware')



router.post('/',authController.userRegister)
router.get('/',authToken,userController.getUser)
router.get('/:id',userController.getUserById)
router.put('/',authToken,userController.updateUser)
router.delete('/:id',authToken,userController.deleteUser)
router.post('/login',authController.userLogin)
module.exports = router