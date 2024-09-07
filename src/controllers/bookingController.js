const booking = require('../models/BookingModel');
const timeslot = require('../models/timeSlotModel')
const BookingService = require('../services/bookingService')


const Booking = async (req,res)=>{
    try{
       
          const newBooking =  await BookingService.Booking(req.body,req.user)
        res.status(200).json(newBooking)
    }catch(err){
        return res.status(400).json({message: 'cannot book service'})
    }
}


const updateBooking = async(req,res)=>{
    
}


module.exports = Booking