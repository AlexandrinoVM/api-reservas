const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const router = require('./routes/userRoutes')
//const userRoutes = require('./routes')
const db = require('./db')
const User = require('./models/usermodel')

const app = express()

dotenv.config()
const PORT = process.env.PORT || 3000

app.use(bodyparser.json())
app.use('/user',router)

db.sync({ force: true }) 
.then(() => {
  console.log(`Banco de dados conectado e tabelas criadas: ${process.env.DB_NAME}`);
})
.catch(err => {
  console.error('Erro ao conectar com o banco de dados:', err);
});


app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})
