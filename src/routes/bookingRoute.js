const Booking = require('../controllers/bookingController')
const verifiJwt = require('../middlewares/authMidlleware')
const express = require('express')
const router = express.Router()


router.post('/',verifiJwt.authToken,Booking.Booking)
router.delete('/',verifiJwt.authToken,Booking.DeleteBooking)

module.exports = router