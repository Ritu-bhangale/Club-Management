import Mongoose from 'mongoose'

const signUpTemplate = new Mongoose.Schema({
    fullName: {
        type: 'String',
        required: 'true',
    },
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

export default Mongoose.model('profile',signUpTemplate);