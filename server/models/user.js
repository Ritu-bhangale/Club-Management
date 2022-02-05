const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const Joi = require("joi")

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true,"Please Enter your name"]},
    email: {type: String, required: [true,"Please Enter your E-mail Id"]},
    password: {type: String, required: [true,"Please Enter your password"],minlength:[8,"Password should have more than 8 characters"]},
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
    // logo: {
    //     type: String,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, { expiresIn: "7d"})
    return token
}
const User = mongoose.model("clubs",userSchema);

const validate = (data) =>{
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        email: Joi.string().required().label("email"),
        password: passwordComplexity().required().label("password")
    })
    return schema.validate(data)
}

module.exports ={User, validate}