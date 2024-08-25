require('dotenv').config()
const jwt = require('jsonwebtoken')


const key = process.env.API_KEY

const authToken = async (req,res,next)=>{
    
}

const apiMiddleware = (req,res,next) =>{
    const apikey = req.headers['x-api-key']

    if(apikey === key){
        next()
    }else{
        res.status(400).json({error: 'cannot acess'})
    }
}

module.exports = apiMiddleware