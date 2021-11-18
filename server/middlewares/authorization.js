const Site = require('../models/Site');

module.exports = {
    SiteAuthorization: (req, res, next) => {
        Site
            .findOne({ _id: req.params.id })
            .then(result => {
                if (result) {
                    if (result.owner == req.loggedUser._id) {
                        next()
                    } else {
                        next({
                            status: 403,
                            message: 'not authorized'
                        })
                    }
                } else {
                    next({
                        status: 404,
                        message: 'No Data'
                    })
                }
            })
            .catch(next)
    }
}