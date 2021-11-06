const router = require('express').Router()
const siteRouter = require('./site')
const userRouter = require('./user')

router.use('/sites', siteRouter)
router.use('/user', userRouter)

module.exports = router