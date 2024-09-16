const Service = require('../services/service')


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
            return res.status(400).json({message: "no services avaliables"})
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

const deleteService = async (req, res) => {
    try {
        const response = await Service.deleteService(req);
        if (response.status === 404) {
            return res.status(404).json({ message: 'There is no service with this ID' });
        }
        res.status(200).json({ message: "Service deleted" }); 
    } catch (error) {
        res.status(400).json({ message: 'Error trying to delete the service', error: error.message });
    }
};



module.exports = {createService,getServices,updateService,deleteService}