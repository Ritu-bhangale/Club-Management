import Mongoose from 'mongoose'

const loginTemplate = new Mongoose.Schema({
    email: {
        type: 'String',
        required: 'true',
    },
    password: {
        type: 'String',
        required: 'true',
    },
    date: {
        type: 'Date',
        default: Date.now
    }
})

export default Mongoose.model('profile',loginTemplate);