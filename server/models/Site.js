const { Schema, model } = require('mongoose')

const siteSchema = new Schema({
  URL: {
    type: String,
    required: [true, 'URL is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
}, {
  versionKey: false,
  timestamps: true
})

const Site = model('Site', siteSchema)

module.exports = Site