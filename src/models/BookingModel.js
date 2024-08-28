const {DataTypes} = require('sequelize')
const sequelize = require('../db.js')
const user = require('./userModel.js')
const timeSlot = require('./timeSlotModel.js')

const Booking = sequelize.define('Booking',{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:user,
            key:'id'
        }
    },
    timeslot_id:{
        type:DataTypes.INTEGER,
        references:{
            model: timeSlot,
            key:'id'
        } 
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    payment_status:{
        type:DataTypes.STRING,
        allowNull:false
    }


})

module.exports = Booking