const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/authMidlleware')
const isAdmin = require('../middlewares/adminMidllewere')

const service = require('../controllers/serviceController')

router.post('/',verifyToken.authToken,isAdmin,service.createService)
router.get('/',service.getServices)
router.put('/:id',verifyToken.authToken,isAdmin,service.updateService)
router.delete('/:id',verifyToken.authToken,isAdmin,service.deleteService)

module.exports =router