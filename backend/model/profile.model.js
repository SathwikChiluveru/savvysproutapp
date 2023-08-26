const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        accID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        bio: {
            type: String,
            default: ""
        },
        gender: {
            type: String,
            default: ""
        },
        userName: {
            type: String,
            default: ""
        },
        neightborhood: {
            type: String,
            default: ""
        },
        skills: [{
            type: String,
            default: ""
        }],
        community: [{
            type: String,
            default: ""
        }],

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Profile', profileSchema, 'profiles')