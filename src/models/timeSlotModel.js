const {DataTypes} = require('sequelize')
const sequelize = require('../db.js')
const Service = require('./seviceModel.js')

const timeSlot = sequelize.define("TimeSlot",{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_service:{
        type:DataTypes.INTEGER,
        references:{
            model: Service,
            key:'id'
        }
    },
    avaliable_slots:{
        type:DataTypes.INTEGER,
    },
    start_time:{
        type:DataTypes.DATE,
        allowNull:false
    },
    end_time:{
        type:DataTypes.DATE
    }
})

module.exports =timeSlot
