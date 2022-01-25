const {Flats} = require('../models/models')

class FlatsController {
    async getOneFlat(req, res) {
        const {id} = req.params
        const flat = await Flats.findOne({where: {id}})
        console.log('dsfsdfsdfsdf' + flat)
        return res.json(flat)
    }

    async getAllFlats (req, res) {
        let {floor, rooms} = req.query

        // page = page || 1
        // limit = limit || 8
        // let offset = page * limit - limit

        let flats
        if (!floor && !rooms) flats = await Flats.findAndCountAll()
        
        if (floor && !rooms) flats = await Flats.findAndCountAll({where:{floor}})
        
        if (!floor && rooms) flats = await Flats.findAndCountAll({where:{rooms}})
        
        if (floor && rooms) flats = await Flats.findAndCountAll({where:{rooms, floor}})
       
        return res.json(flats)
    }
}



module.exports = new FlatsController()