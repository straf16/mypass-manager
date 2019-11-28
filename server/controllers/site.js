const { Site } = require('../models')

class SiteController {
  static create(req, res, next) {
    const { URL, username, password } = req.body
    Site
      .create({
        URL,
        username,
        password
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(next)
  }
  static read(req, res, next) {
    Site
      .find()
      .then(result => {
        if (result.length > 0) {
          res.status(200).json(result)
        } else {
          next({
            status: 404,
            message: 'No Data'
          })
        }
      })
      .catch(next)
  }
  static readById(req, res, next) {
    Site
      .findById(req.params.id)
      .then(result => {
        if (result) {
          res.status(200).json(result)
        } else {
          next({
            status: 404,
            message: 'Not Found'
          })
        }
      })
      .catch(next)
  }
  static deleteById(req, res, next) {
    Site
      .findByIdAndDelete(req.params.id)
      .then(result => {
        if (result) {
          res.status(200).json(result)
        } else {
          next({
            status: 404,
            message: 'Not Found'
          })
        }
      })
      .catch(next)
  }
}

module.exports = SiteController