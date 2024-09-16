const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const Booking = require('../models/BookingModel')

const createUser = async (data) =>{
             
    const{name,email,role,password} = data
    const pass = await bcrypt.hash(password,10)
    const newUser =await User.create({name,email,password:pass,role: role || 'common'})

    return newUser
            
}    


const getUsers = async ()=>{
    const user =await User.findAll()
    return user
}

const getUserById = async (data) => {
    const{id} = data.params
    const user =await User.findOne({where:{id:id}})
    const booking =await Booking.findOne({where:{user_id:id}})
    if(booking){
        return {user,booking}
    }
    return user
}

const updateUser = async (data,userId)=>{
    const {name,email,password} = data
    const hashedPassword = password ? await bcrypt.hash(password, 10): undefined 
    await User.update({name,email,password:hashedPassword},{where:{id:userId}})
    const updatedUser =await User.findOne({where:{id:userId}})


    return updatedUser
}

const deleteUser = async(userId)=>{
    await User.destroy({where:{id:userId}})

}
module.exports = {createUser,getUsers,getUserById,updateUser,deleteUser}
