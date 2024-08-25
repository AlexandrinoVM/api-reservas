require('dotenv').config()

const key = process.env.API_KEY

const apiMiddleware = (req,res,next) =>{
    const apikey = req.headers['x-api-key']

    if(apikey === key){
        next()
    }else{
        res.status(400).json({error: 'cannot acess'})
    }
}

module.exports = apiMiddleware