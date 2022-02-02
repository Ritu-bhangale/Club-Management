const { type } = require("express/lib/response")
const mongoose = require("mongoose")
const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    wingname: {
        type: String,
        required: [true, "Enter name og the wing under which your club lies"]
    },
    website: {
        type: String,
        required: [true, "Enter your website link"]
    },
    description: {
        type: String,
        required: [true, "Write about the club in 200 characters"],
        maxlength: [200, "About us cannot exceed 200 characters"]
    },
    images: {
        public_id: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Clubs", clubSchema)