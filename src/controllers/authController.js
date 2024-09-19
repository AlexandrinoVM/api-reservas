const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const UserController = require('../controllers/userController')
const dotenv = require('dotenv')
dotenv.config()

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
            console.error(error)
            res.status(400).json({error:"cannot Register this user"})
        }
    }

}

const userLogin = async (req,res)=>{
    try{
       const{name,password} = req.body
       const userExists = await User.findOne({where:{name:name}})
       if(userExists){
            const passCompare = await bcrypt.compare(password,userExists.password)
            if(passCompare){
                const token = jwt.sign(
                    {id:userExists.id,role:userExists.role},
                    process.env.JWT_SECRET,
                    {expiresIn:'1h'}
                )
                res.status(200).json({message: 'logged',token:token})
            }
            else{
                res.status(400).json({error: 'Unauthorized - Invalid credentials'})
            }
       }else{
        res.status(401).json({error: 'Unauthorized - Invalid credentials'})
       }
       
    }catch(error){
        res.status(401).json({error: 'Unauthorized - Invalid credentials'})
    }
}

module.exports = {
    userRegister,
    userLogin
}