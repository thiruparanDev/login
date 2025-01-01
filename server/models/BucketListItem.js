// const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BucketListItemSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('buckeListItem', BucketListItemSchema)
// const BucketListItem = model('buckeListItem', BucketListItemSchema)

// module.exports = BucketListItem