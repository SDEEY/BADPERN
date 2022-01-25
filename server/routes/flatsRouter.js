const Router = require('express')
const router = new Router()
const flatsController = require('../controllers/flatsController')

router.get('/flats', flatsController.getAllFlats)
router.get('/:id', flatsController.getOneFlat)

module.exports = router