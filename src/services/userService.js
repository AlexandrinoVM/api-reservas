const User = require('../models/userModel')
const bcrypt = require('bcryptjs')


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
    const{id} = data
    const user = User.findOne({where:{id:id}})
    return user
}

const updateUser = async (data,userId)=>{
    const {name,email,password} = data
    const hashedPassword = password ? await bcrypt.hash(password, 10): undefined 
    const user = await User.update({name,email,password:hashedPassword},{where:{id:userId}})
    const updatedUser =await User.findOne({where:{id:userId}})


    return updatedUser
}
module.exports = {createUser,getUsers,getUserById,updateUser}
