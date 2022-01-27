const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
const connection = require('./db')
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")

//database connection 
connection()

//middlewares
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use("/register",userRoutes)
app.use("/login",authRoutes)

const port = process.env.port || 8080
app.listen(port,()=>console.log(`listening on port ${port}`))