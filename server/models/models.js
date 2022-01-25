const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Flats = sequelize.define('flats', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    floor: {type: DataTypes.INTEGER},
    pos_on_floor: {type: DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER},
    rooms: {type: DataTypes.INTEGER},
    layout_image: {type: DataTypes.TEXT},
}, {
    timestamps: false
})

module.exports = {
    Flats
}