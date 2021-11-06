const User = require('../models/user');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
    static register(req, res, next) {
        const { name, email, password } = req.body;
        User
          .create({ name, email, password })
          .then(() => res.status(201).json({ result: 'success' }))
          .catch(next);
    }

    static login(req, res, next) {
        const { email, password } = req.body;
        User
          .findOne({ email })
          .then(result => {
            if (result && comparePassword(password, result.password)) {
              const payload = {
                _id: result._id,
                name: result.name,
                email: result.email
              }
              const token = generateToken(payload)
              res.status(200).json({
                token,
                name: result.name,
                email: result.email
              })
            } else {
              next({
                status: 401,
                message: 'invalid email/password'
              })
            }
          })
          .catch(next)
    }
};

module.exports = UserController;
