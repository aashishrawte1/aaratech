const mongoose = require('mongoose')
const geocoder = require('../utils/geocoder')

const shopSchema = mongoose.Schema({ 
    shopId: {
        type: String,
        required: true,
        trime: true,
        maxlength: 10
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          index: '2dsphere',
          required: true
        },
        formattedAddress: String,
      },
      createAt: {
          type: Date,
          default: Date.now
      }
})

shopSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.address)    
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }
    this.address = undefined
    next()

})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop