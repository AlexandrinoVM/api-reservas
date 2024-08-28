const express = require('express')
const router = express.Router()

const service = require('../controllers/serviceController')

router.post('/',service.createService)


module.exports =router