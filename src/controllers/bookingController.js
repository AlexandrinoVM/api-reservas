const booking = require('../models/BookingModel');
const timeslot = require('../models/timeSlotModel')
const BookingService = require('../services/bookingService')


const Booking = async (req,res)=>{
    try{
        const newBooking =  await BookingService.Booking(req.body,req.user)
        res.status(200).json({ success: true,
        message: 'Booking created successfully',
        booking:newBooking})
    }catch(error){
        return res.status(400).json({ success: false,
            message: error.message || 'Failed to create booking'})
    }
}


const updateBooking = async(req,res)=>{
    
}


module.exports = Booking