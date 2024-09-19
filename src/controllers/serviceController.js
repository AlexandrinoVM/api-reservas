const Service = require('../services/service')
const Booking = require('../models/BookingModel')

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
        res.status(200).json({description: "Successfully retrieved services",services:services})

    }catch(error){
        res.status(401).json({message: "Unauthorized - User not logged in"})
    }
    
}


const updateServiceController = async(req,res)=>{
    try{
        const response = await Service.updateService(req.body,req.params.id)
       if(response.status === 404){
        return res.status(400).json({message:'there is no service on database'})
       }
        res.status(200).json({message: "service updated"})

    }catch(error){
        res.status(400).json({message:'error trying to update the service',error:error.message})
    }
}

const deleteService = async (req, res) => {
    try {
        const bookings = await Booking.findAll({ where: { timeslot_id: req.params.id } });
        if (bookings.length > 0) {
          return res.status(400).json({ 
            message: "Cannot delete the service. There are bookings associated with this timeslot." 
          });
        }
        await Service.deleteService(req.params.id);
        res.status(200).json({ message: "Service deleted successfully" });
      } catch (error) {
        res.status(400).json({ 
          message: "Error trying to delete the service", 
          error: error.message 
        });
      }
};



module.exports = {createService,getServices,updateServiceController,deleteService}