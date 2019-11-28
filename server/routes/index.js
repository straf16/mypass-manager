const router = require('express').Router()
const siteRouter = require('./site')

router.use('/sites', siteRouter)

module.exports = router