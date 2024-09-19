const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const userService = require('../services/userService.js')
require('dotenv').config()

const createUser = async (req,res) =>{
    try{
            
        const user = await userService.createUser(req.body)
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: 'cannot crate user'})
    }
}   

const getUser = async (req,res) =>{
    try{
        const user =await userService.getUsers()
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: 'cannot get users'})
    }
}

const getUserById = async (req,res) =>{
    try{
        const user =await userService.getUserById(req)
        res.status(200).json({user:user.user,bookings:user.booking})
    }catch(error){
        res.status(400).json({error: `canot get the user`,error:error.message})
    }
}

const updateUser = async (req,res)=>{
    try{
        
        const user = await userService.updateUser(req.body,req.user.id)
        res.status(200).json({description:"User updated successfully",content:user})
    }catch(error){
        res.status(400).json({description: "Error in request or user not found"})
    }

}

const deleteUser = async (req,res)=>{
    try{
        await userService.deleteUser(req.user.id)
        res.status(200).json({message: 'user deleted'})

    }
    catch(error){
        res.status(400).json({error: 'cannot delete this user'})

    }
}


module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
}