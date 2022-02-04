const Event = require("../models/eventModel")
const moment = require("moment")

exports.createEvent = async(req, res, next) => {
    const event = Event(req.body)
    await event.save();
    res.status(201).json({
        success: true,
    })
}
exports.getEvent = async(req, res) => {
    const events = await Event.find({ start: { $gte: moment(req.query.start).toDate() }, end: { $lte: moment(req.query.end).toDate() } })
    res.send(events)
}