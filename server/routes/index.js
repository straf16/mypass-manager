const router = require('express').Router()
const siteRouter = require('./site')
const userRouter = require('./user')

router.use('/', userRouter)
router.use('/sites', siteRouter)

module.exports = router