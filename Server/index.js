import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import MONGOURL from './config/key.js'

import routesUrl from './routes/routes.js'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routesUrl);
app.get('/',(req,res)=>{
    res.send("hello world")
})

Mongoose.connect(MONGOURL, () => {
    useNewUrlParser: true;
    useUnifiedTopology: true;
    console.log("database connected");
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));