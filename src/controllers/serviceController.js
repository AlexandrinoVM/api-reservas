const sequelize = require('../db')
const Service = require('../models/seviceModel')
const timeSlot = require('../models/timeSlotModel')



const createService = async(req,res) =>{
    const{name,price,description,avaliable_slots,start_time,end_time} = req.body

    
    try{
        const service = await Service.create({
            name:name,
            price:price,
            description:description,
            avaliable_slots:avaliable_slots
        })

        const ts =await timeSlot.create({
            id_service:service.id,
            start_time:start_time,
            end_time:end_time
        }) 

        
        res.status(200).json({service:service,timeslot:ts})
    }catch(err){
        res.status(400).json({message:`cannot create this service`})
    }
}

module.exports = {createService}