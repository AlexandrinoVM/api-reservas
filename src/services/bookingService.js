const booking = require('../models/BookingModel');
const timeSlot = require('../models/timeSlotModel');
const timeslot = require('../models/timeSlotModel');



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
    const {timeslot_id,service_id,status,payment_status}  = data


    const Timeslot = await timeslot.findOne({where:{id:timeslot_id}})

    if(await verifySlots(Timeslot.avaliable_slots) && !(await VerifyConflicts(user,service_id,timeslot_id))){
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
        throw new Error("No Available slots or conflict detected")
    }
    
}


module.exports = {Booking,verifySlots}