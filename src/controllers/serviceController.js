
const sequelize = require('../db')
const Service = require('../services/service')


async function itemExists(name){
    const item = await Service.findOne({where:{name:name}})
    return !!item
}

const createService = async(req,res) =>{    
            try{
               await Service.createService(req.body)
                res.status(200).json({message:"service created "})
            }catch(err){
                res.status(400).json({message:`cannot create this service`})
            }
}

const getServices = async (req,res)=>{
    try{
        const services =await Service.getServices()
        if(services.length === 0){
            res.status(400).json({message: "no services avaliables"})
        }
        res.status(200).json(services)

    }catch(error){
        res.status(400).json({message: "error trying to find any service"})
    }
    
}


const updateService = async(req,res)=>{
    try{
        const response = await Service.updateService(req.body,req.params.id)
       if(response.status === 404){
        return res.status(400).json({message:'there is no service on database'})
       }
        res.status(200).json({message: "service updated"})

    }catch(error){
        res.status(400).json({message:'error trying to update the service'})
    }
}


module.exports = {createService,getServices,updateService}