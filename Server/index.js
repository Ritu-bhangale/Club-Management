import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cors from 'cors'

const express = require('express');
const app = express();

const mongoose = require('Mongoose');

mongoose.connect("",{
})

app.listen(3001,(req,res)=>{
    console.log("server running");
})