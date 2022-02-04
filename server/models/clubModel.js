const { type } = require("express/lib/response")
const mongoose = require("mongoose")
const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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
const ClubForm = new mongoose.model("Clubs", clubSchema)
export default ClubForm;