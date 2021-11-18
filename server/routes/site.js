const router = require('express').Router()
const { site } = require('../controllers')
const authentication = require('../middlewares/authentication')
const { SiteAuthorization } = require('../middlewares/authorization')

router.use(authentication)
router.post('/', site.create)
router.get('/', site.read)
router.get('/:id', SiteAuthorization, site.readById)
router.patch('/:id', SiteAuthorization, site.updateById)
router.delete('/:id', SiteAuthorization, site.deleteById)

module.exports = router