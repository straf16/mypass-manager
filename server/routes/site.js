const router = require('express').Router()
const { site } = require('../controllers')

router.post('/', site.create)
router.get('/', site.read)
router.get('/:id', site.readById)
router.delete('/:id', site.deleteById)

module.exports = router