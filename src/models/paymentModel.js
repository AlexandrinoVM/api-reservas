const {DataTypes} = require('sequelize')
const booking = require('./BookingModel')
const sequelize = require('../db')

const Payment = sequelize.define('Payment',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    booking_id:{
        type:DataTypes.INTEGER,
        references:{
            model: booking,
            key:'id'
        }
    },
    amount:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        payment_method:DataTypes.STRING,
        payment_status:DataTypes.STRING,
    }
})

module.exports = Payment