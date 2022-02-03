import Mongoose from 'mongoose'


const signUpTemplate = new Mongoose.Schema({
    name: {
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
})
var UserDetails = Mongoose.model('profile',signUpTemplate);
export default UserDetails;