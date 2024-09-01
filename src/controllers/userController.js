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
        const user =await userService.getUserById(req.params)
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: `canot get the user with id number ${id}`})
    }
}

const updateUser = async (req,res)=>{
    try{
        
        const user = await userService.updateUser(req.body,req.user.id)
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: 'connot update this user ',error:error})
    }

}

const deleteUser = async (req,res)=>{
    try{
        const { id } = req.params
        await User.destroy({
            where: {id:id}
        })
        res.status(200).json({message: 'user deleted'})

    }
    catch(error){
        res.status(400).json({error: 'cannot delete this user'})

    }
}

const booking = async (req,res) =>{
    
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
}