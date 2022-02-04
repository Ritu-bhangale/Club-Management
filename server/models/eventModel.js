const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    start: {
        type: Date,
        required: [true, "Enter Start Date"]
    },
    end: {
        type: Date,
        required: [true, "Enter End Date"]
    },
    title: {
        type: String,
        required: [true, "Enter title of the event"]
    }
},
    { timestamps:true},
)
module.exports = mongoose.model("event", eventSchema)