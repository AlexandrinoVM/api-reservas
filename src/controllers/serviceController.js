const sequelize = require('../db')
const Service = require('../models/seviceModel')
const timeSlot = require('../models/timeSlotModel')


async function itemExists(name){
    const item = await Service.findOne({where:{name:name}})
    return !!item
}

const createService = async(req,res) =>{
    const{name,price,description,avaliable_slots,start_time,end_time} = req.body

        
            try{
                if(await itemExists(name)){
                    return res.status(400).json({message: "service already exists"})
                }


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

const getServices = async (req,res)=>{
    const services = await Service.findAll()
    if(services){
        res.status(200).json(services)
    }
    res.status(400).json({message: "cannot find any service"})
}

module.exports = {createService,getServices}