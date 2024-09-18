const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const router = require('./routes/userRoutes')
const serviceRouter = require('./routes/serviceRoute')
const bookingRoutes= require('./routes/bookingRoute.js')


//const userRoutes = require('./routes')
const db = require('./db')
const {user,timeslot,service} = require('./models/index.js')

const app = express()

dotenv.config()
const PORT = process.env.PORT || 3000

app.use(bodyparser.json())
app.use('/user',router)
app.use('/service',serviceRouter)
app.use('/booking',bookingRoutes)


db.sync({alter: true }) 
.then(() => {
  console.log(`database sucessefully connected at port: ${process.env.DB_NAME}`);
})
.catch(err => {
  console.error('Erro trying to connect to the database:', err);
});


app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})
 