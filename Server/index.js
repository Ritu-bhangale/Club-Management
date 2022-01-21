import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

import routeURLs from '/Server/routes/routes'

dotenv.config();


const app = express();

Mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
    console.log("database connected");
})

app.listen(3001, (req, res) => {
    console.log("server running");
})