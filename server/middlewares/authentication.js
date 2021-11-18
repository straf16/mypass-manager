const { decodeToken } = require('../helpers/jwt');
const User = require('../models/user');

module.exports = (req, res, next) => {
    try {
        let decoded = decodeToken(req.headers.token) // get token from headers
        req.loggedUser = decoded
        User.findOne({
                _id: req.loggedUser._id
            })
            .then(result => {
                if (!result) {
                    next({
                        status: 403,
                        message: 'Unauthorized'
                    })
                } else {
                    next()
                }
            })
    } catch (error) {
        next(error)
    }
};
