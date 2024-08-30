require('dotenv').config()
const jwt = require('jsonwebtoken')

function isAdmin(req,res,next){
    const autoken = req.headers.authorization
    const token = autoken.split(' ')[1]
    const user = jwt.decode(token,process.env.JWT_SECRET)


    if(user.role =='admin'){
       
        next();
    }else{
        return res.status(403).json({message: 'not authorized'})
    }
}

module.exports = isAdmin