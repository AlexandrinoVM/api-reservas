const {Sequelize} = require("sequelize")
require("dotenv").config()

const dbname = process.env.DB_NAME
const dbhost = process.env.DB_HOST
const dbuser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const sequelize = new Sequelize(dbname,dbuser,dbPassword, {
    dialect:"mysql",
    host:dbhost
})

module.exports = sequelize;