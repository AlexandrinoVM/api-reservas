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


const DeleteBooking = async(req,res)=>{
    try{
        const deleteBooking = await BookingService.DeleteBooking(req.body,req.user.id)
        if(deleteBooking.status == 404){
            return res.status(404).json({message:"error trying to delete because booking may not exist"})
        }
        res.status(200).json({message:"booking deleted with sucess"})
    }catch(error){
        res.status(400).json({message:"error trying to delete de booking",error:error.message})
    }



}


module.exports = {Booking,DeleteBooking}