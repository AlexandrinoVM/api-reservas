const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/usermodel')
const UserController = require('../controllers/userController')

const userRegister = async (req,res) =>{
    const {name,email} = req.body
    const emailExists = await User.findOne({where:{email:email}})
    const nameExists = await User.findOne({where:{name:name}})
    if(nameExists){
        return res.status(400).json({message:"user already exists"})
    }else if(emailExists){
        return res.status(400).json({message:"email already exists"})
    }
    else{
        try{
            const user = await UserController.createUser(req,res)
            res.status(200).json(user)
        }catch(error){
            res.status(400).json({error:"cannot Register this user"})
        }
    }

}

module.exports = {userRegister}