const {DataTypes} = require('sequelize')
const sequelize = require('../db.js')


const  User = sequelize.define('User',{
        id:{
            autoIncrement:true,
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type:DataTypes.STRING,
            defaultValue:'common'
        },
        email:{
            type:DataTypes.STRING,
            allowNULL: false,
            unique:true  
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
    
module.exports = User
