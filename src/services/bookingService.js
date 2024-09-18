const booking = require('../models/BookingModel');
const timeSlot = require('../models/timeSlotModel');
const timeslot = require('../models/timeSlotModel');
const Service = require('../models/seviceModel')
const stripe = require('../config/stripe');


const verifySlots = async (data)=>{
    return data > 0
}

const VerifyConflicts = async(user,newServiceId,newTimeSlotId)=>{
    const auxBookings= await booking.findOne({wherer:{user_id:user.id}})
    if (!auxBookings || auxBookings.length === 0) {
        return false;
    }
    const newTimeslot = await timeSlot.findOne({ where: { id: newTimeSlotId } });

    for (const auxBooking of auxBookings) {
        const auxExistingTimeSlot = await timeSlot.findOne({ where: { id: auxBooking.timeslot_id } });

       
        if (
            newTimeslot.start_time < auxExistingTimeSlot.end_time &&
            newTimeslot.end_time > auxExistingTimeSlot.start_time
        ) {
            return true; 
        }
    }

    return false;
}

const Booking = async (data,user)=>{
    const {timeslot_id,service_id,status,payment_status,payment_method_id}  = data


    const Timeslot = await timeslot.findOne({where:{id:timeslot_id}})

    if(await verifySlots(Timeslot.avaliable_slots) && !(await VerifyConflicts(user,service_id,timeslot_id))){
        
    
        const service =await Service.findOne({where:{id:service_id}})
        const price = parseInt(service.price * 100, 10);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price,
            currency: 'brl',
            payment_method: payment_method_id,
            confirm: true, 
            description: `Booking for service ${service.name}`,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never'
            }
        });

        await Timeslot.update({avaliable_slots:Timeslot.avaliable_slots -1},{where:{id:timeslot_id}})

        const newBooking = await booking.create({
            user_id: user.id,
            timeslot_id:timeslot_id,
            service_id:service_id,
            status:status || 'confirmed',
            payment_status:paymentIntent.status === 'succeeded' ? 'paid' : 'pending'
        })
        return newBooking
    }else{
        throw new Error("No Available slots or conflict detected")
    }
    
}

const DeleteBooking = async(data,userId)=>{
    const {service_id} = data
    const bookingExist = await booking.findOne({where:{user_id:userId,service_id:service_id}})
    if(!bookingExist){
        return {status:404,message:"error finding the booking"}
    } 
    await booking.destroy(({where:{user_id:userId,service_id:service_id}}))
    await Timeslot.update({avaliable_slots:Timeslot.avaliable_slots +1},{where:{id:service_id}})
    return { status: 200, message: "Booking deleted" };

}

module.exports = {Booking,DeleteBooking}