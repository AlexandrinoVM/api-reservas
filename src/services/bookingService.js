const booking = require('../models/BookingModel');
const timeslot = require('../models/timeSlotModel')



const verifySlots = async (data)=>{
    return data > 0
}


const Booking = async (data,user)=>{
    const {timeslot_id,service_id,status,payment_status}  = data


    const Timeslot = await timeslot.findOne({where:{id:timeslot_id}})

    if(await verifySlots(Timeslot.avaliable_slots)){
        await Timeslot.update({avaliable_slots:Timeslot.avaliable_slots -1},{where:{id:timeslot_id}})
    

    const newBooking = await booking.create({
        user_id: user.id,
        timeslot_id:timeslot_id,
        service_id:service_id,
        status:status,
        payment_status:payment_status
    })
    return newBooking
    }else{
        throw new Error("No Avaliable slots")
    }
    
}


module.exports = {Booking,verifySlots}