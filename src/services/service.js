const Service = require('../models/seviceModel')
const timeSlot = require('../models/timeSlotModel')

async function itemExists(name){
    const item = await Service.findOne({where:{name:name}})
    return !!item
}

const createService = async(data)=>{
    const{name,price,description,avaliable_slots,start_time,end_time} = data
        if(await itemExists(name)){
            return res.status(400).json({message: "service already exists"})
        }


        const service = await Service.create({
            name:name,
            price:price,
            description:description,
            
        })

        const ts =await timeSlot.create({
            id_service:service.id,
            start_time:start_time,
            end_time:end_time,
            avaliable_slots:avaliable_slots
        })  
}

const updateService = async(data,id)=>{
    const{name,price,description,avaliable_slots,start_time,end_time} = data   
        const auxservice =await Service.findOne({where:{id:id}})
        
        if (!auxservice) {
            return { status: 404, message: "Service not found" };
        }
        const service = await Service.update({
            name:name,
            price:price,
            description:description,
            
        },{where:{id:id}})

        
    
        const ts =await timeSlot.update({
            id_service:id,
            start_time:start_time,
            end_time:end_time,
            avaliable_slots:avaliable_slots
        },{where:{id_service:id}})  
        
        return { status: 200, message: "Service and timeslots updated" };
}

const getServices = async ()=>{
    const services = await Service.findAll()
    return services
}


const deleteService = async(data)=>{
    const {id }= data.params
    const serviceExists = await Service.findOne({where:{id:id}})
    if(!serviceExists){
        return {status:404,message:"service does not exsists"}
    }
    await timeSlot.destroy({where:{id_service:id}})
    await Service.destroy({where: {id:id}})
    return {status:200,message:"service deleted"}
}

module.exports={getServices,updateService,createService,deleteService}