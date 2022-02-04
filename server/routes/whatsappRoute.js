const express = require("express");
const router = require('express').Router();
module.exports = router;
const ReminderMsg = require('../models/whatsapp');




//API routes
router.get("/getAllReminder", (req, res) => {
    ReminderMsg.find({}, (err, reminderList) => {
        if (err) {
            console.log(err)
        }
        if (reminderList) {
            res.send(reminderList)
        }
    })
})
router.post("/addReminder", (req, res) => {
    const { reminderMsg, remindAt } = req.body
    const reminder = new ReminderMsg({
        reminderMsg,
        remindAt,
        isReminded: false
    })
    reminder.save(err => {
        if (err) {
            console.log(err)
        }
        ReminderMsg.find({}, (err, reminderList) => {
            if (err) {
                console.log(err)
            }
            if (reminderList) {
                res.send(reminderList)
            }
        })
    })

})
router.post("/deleteReminder", (req, res) => {
    ReminderMsg.deleteOne({ _id: req.body.id }, () => {
        ReminderMsg.find({}, (err, reminderList) => {
            if (err) {
                console.log(err)
            }
            if (reminderList) {
                res.send(reminderList)
            }
        })
    })
})