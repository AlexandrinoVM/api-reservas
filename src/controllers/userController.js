const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createUser = async (req,res) =>{
        try{
                let {password} = req.body
                const pass = await bcrypt.hash(password,10)
                const{name,email,role} = req.body;
                const user =await User.create({name,email,password:pass,role: role || 'common'})
                res.status(200).json(user)
        }catch(error){
            res.status(400).json({error: 'cannot crate user'})
            }
}   


const getUser = async (req,res) =>{
    try{
        const user =await User.findAll()
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: 'cannot get users'})
    }
}

const getUserById = async (req,res) =>{
    try{
        const id = req.params
        const user =await User.findAll({where:{id:id}})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: `canot get the user with id number ${id}`})
    }
}

const updateUser = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.decode(token,process.env.JWT_SECRET)

    const {email} = req.body
    const emailexists = await User.findOne({where:{email:email}})
    if(emailexists){
        res.status(400).json({error: 'cannot update user with this email'})
    }
    else{
    try{
        const {name,email,password} = req.body
        await User.update({name,email,password},{
            where:{id:decodedToken.id}
        })
        res.status(200).json()
    }catch(error){
        res.status(400).json({error: 'connot update this user'})
    }
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



module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
}