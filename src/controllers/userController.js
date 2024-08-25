const User = require('../models/usermodel.js')


const createUser = async (req,res) =>{
    try{
        const{name,email,password} = req.body;
        const user =await User.create({name,email,password})
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
    try{
        const {id }= req.params
        const {name,email,password} = req.body
        const user = await User.update({name,email,password},{
            where:{id:id}
        })
        res.status(200)
    }catch(error){
        res.status(400).json({error: 'connot update this user'})
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