const {DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const Service = sequelize.define("Service",{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    decription:{
        type:DataTypes.TEXT,
        allowNull:true

    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false
    },
    avaliable_slots:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

})

module.exports = Service