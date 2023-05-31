const router = require('express-promise-router')()
const hero = require('./hero.routes')

router.use('/', hero)

module.exports = router
