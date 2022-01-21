import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const routeurl = require('../Server/Routes/routes')


dotenv.config();


const app = express();

Mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("database connected");
})


app.listen(3001, (req, res) => {
    console.log("server running");
})