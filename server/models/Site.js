const { Schema, model } = require('mongoose')
const getDetail = require('../helpers/getPopularSites')

const siteSchema = new Schema({
  URL: {
    type: String,
    required: [true, 'URL is required']
  },
  name: {
    type: String,
    required: [true, 'name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  img: String
}, {
  versionKey: false,
  timestamps: true
})

siteSchema.pre('save', function(next) {
  let { img } = getDetail(this.URL)
  this.img = img
  next()
})

siteSchema.pre('findOneAndUpdate', function (next) {
  let { img } = getDetail(this.getUpdate().URL)
  this.getUpdate().img = img
  next()
})

const Site = model('Site', siteSchema)

module.exports = Site
