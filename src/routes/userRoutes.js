const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const apiMiddleware = require('../middlewares/apiMidlleware')



router.post('/',authController.userRegister)
router.get('/',apiMiddleware,userController.getUser)
router.get('/:id',apiMiddleware,userController.getUserById)
router.put('/:id',apiMiddleware,userController.updateUser)
router.delete('/:id',apiMiddleware,userController.deleteUser)

module.exports = router