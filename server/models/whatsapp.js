const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    reminderMsg: String,
    remindAt: String,
    isReminded: Boolean
})
module.exports = Reminder = mongoose.model('reminder', reminderSchema);
// const Reminder = new mongoose.model("reminder", reminderSchema)

setInterval(() => {
    Reminder.find({}, (err, reminderList) => {
        if (err) {
            console.log(err)
        }
        if (reminderList) {
            reminderList.forEach(reminder => {
                if (!reminder.isReminded) {
                    const now = new Date()
                    if ((new Date(reminder.remindAt) - now) < 0) {
                        Reminder.findByIdAndUpdate(reminder._id, { isReminded: true }, (err, remindObj) => {
                            if (err) {
                                console.log(err)
                            }
                            const accountSid = process.env.ACCOUNT_SID
                            const authToken = process.env.AUTH_TOKEN
                            const client = require('twilio')(accountSid, authToken);
                            client.messages
                                .create({
                                    body: reminder.reminderMsg,
                                    from: 'whatsapp:+14155238886',
                                    to: 'whatsapp:+919136665058' //YOUR PHONE NUMBER INSTEAD OF 8888888888
                                })
                                .then(message => console.log(message.sid))
                                .done()
                        })
                    }
                }
            })
        }
    })
}, 1000);