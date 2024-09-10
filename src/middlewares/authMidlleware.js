require('dotenv').config()
const jwt = require('jsonwebtoken')


const key = process.env.API_KEY

const authToken = async (req,res,next)=>{
    const authHeade = req.headers.authorization;
    
    token = authHeade.split(' ')[1]
    

    if(authHeade){
        jwt.verify(token,process.env.JWT_SECRET,(err, user)=>{
            if(err){
               res.status(400).json({messge:'invalid token'})
               return
            }
            req.user = user;
        next()
        })
        
    }else{
        res.status(401).json()
    }
}

const apiMiddleware = (req,res,next) =>{
    const apikey = req.headers['x-api-key']

    if(apikey === key){
        next()
    }else{
        res.status(400).json({error: 'cannot acess'})
    }
}

module.exports = {apiMiddleware,authToken}