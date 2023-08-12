const express= require('express')

const app = express();

//route to /
app.get('/',(req,res)=>{
    res.send('everything is fine in this program');
})

module.exports = app;