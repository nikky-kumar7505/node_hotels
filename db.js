const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDb server")
})

db.on('error',()=>{
    console.log("MongoDb connection error: err")
})

db.on('dicconnected',()=>{
    console.log("MongoDB disconnected")
}) 

module.exports = db;