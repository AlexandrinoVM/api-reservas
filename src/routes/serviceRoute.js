const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/authMidlleware')
const isAdmin = require('../middlewares/adminMidllewere')

const service = require('../controllers/serviceController')

router.post('/',verifyToken.authToken,isAdmin,service.createService)


module.exports =router