require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./routes/user.route.js');
const express = require('express');
const cors = require('cors');

//define PORT 
const PORT = process.env.PORT || 8000;

//define hostname
const hostname='localhost'

//middle ware of server 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());



//connect with mongodb atlas 
const connectToDb = async ()=>{
    mongoose.connect(process.env.mongoUrl)
    .then((conn)=>{
        console.log(`database connected successfully to ${conn.connection.host}`);
        app.listen(PORT,()=>{
            console.log(`server running at ${hostname} : ${PORT} `);
        })
    })
    .catch((err)=>{
        console.log('Error : ',err);
        throw err;
    })
}

//call the function
connectToDb();

module.exports = connectToDb;
