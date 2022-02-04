const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const errorMiddleware = require("./middleware/error")



//config
require('dotenv').config()

//database connection 
const connection = require('./db')
connection()

//middlewares
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(errorMiddleware)
    //routes
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")
const clubRoute = require('./routes/clubRoutes')
const eventRoute = require('./routes/calendarRoutes')
app.use("/clubs", clubRoute)
app.use("/register", userRoutes)
app.use("/login", authRoutes)
app.use("/event", eventRoute)


const port = process.env.port || 8080
app.listen(port, () => console.log(`listening on port ${port}`))