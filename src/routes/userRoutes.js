const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const apiMiddleware = require('../middlewares/apiMidlleware')

router.post('/',userController.createUser)
router.get('/',apiMiddleware,userController.getUser)
router.get('/:id',apiMiddleware,userController.getUserById)
router.put('/:id',apiMiddleware,userController.updateUser)
router.delete('/:id',apiMiddleware,userController.deleteUser)

module.exports = router