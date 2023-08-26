const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema(
    {
        accName: {
            type: String,
            required: true
        },
        accEmail: {
            type: String,
            required: true
        },
        accPassword: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Account', accountSchema)