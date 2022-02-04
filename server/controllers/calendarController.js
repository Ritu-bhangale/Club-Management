const Event = require("../models/eventModel")
const moment = require("moment")


//createEvent
exports.createEvent = async(req, res, next) => {
    const event = Event(req.body)
    await event.save();
    res.status(201).json({
        success: true,
    })
}

//getEvent
exports.getEvent = async(req, res) => {
    const events = await Event.find()
    res.send(events)
}

//updateEvent
exports.updateEvent = async(req,res) =>{

    try {
        const event = await Event.findById(req.params.id)
    if(event.userId===req.body.userId){
        await event.updateOne({$set:req.body});
        res.status(200).json({
            event
        })
    }else{
        res.status(403).json("you should update only your event")
    }
    } catch (error) {
        res.status(500).json("internal server error")
    }
}

//deleteEvent
exports.deleteEvent = async(req,res) =>{

    try {
        const event = await Event.findById(req.params.id)
    if(event.userId===req.body.userId){
        await event.deleteOne({$set:req.body});
        res.status(200).json("deleted")
    }else{
        res.status(403).json("you should delete only your event")
    }
    } catch (error) {
        res.status(500).json("internal server error")
    }
}