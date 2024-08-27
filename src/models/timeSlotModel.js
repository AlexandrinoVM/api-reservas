const {DataTypes} = require('sequelize')
const sequelize = require('../db.js')
const Service = require('./seviceModel.js')

const timeSlot = sequelize.define("TimeSlot",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_sevice:{
        type:DataTypes.INTEGER,
        references:{
            model: Service,
            key:'id'
        }
    },
    start_time:{
        type:DataTypes.TIME,
        allowNull:false
    },
    end_time:{
        type:DataTypes.TIME
    }
})

module.exports =timeSlot
