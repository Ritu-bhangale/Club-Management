const { type } = require("express/lib/response")
const mongoose = require("mongoose")
const clubSchema = new mongoose.Schema({
    wingname: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: [1000, "About us cannot exceed 200 characters"]
    },
    logo: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
})
const ClubForm = new mongoose.model("Clubs", clubSchema)
module.exports = ClubForm