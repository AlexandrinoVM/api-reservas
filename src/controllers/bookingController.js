const booking = require('../models/BookingModel')


const Booking = async (req,res)=>{
    const {timeslot_id,service_id,status,payment_status} = req.body;

    try{
        const newBooking = await booking.create({
            user_id: req.user.id,
            timeslot_id:timeslot_id,
            service_id:service_id,
            status:status,
            payment_status:payment_status
        })
        res.status(200).json(newBooking)
    }catch(err){
        res.status(400).json({message: 'cannot book service'})
    }
}

module.exports = Booking