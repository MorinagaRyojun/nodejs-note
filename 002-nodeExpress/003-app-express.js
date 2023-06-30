/* Introduction code.This code is basic form for node run this code by use command : node app.js */
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const index = path.join(__dirname,'/webpages/index.html')

app.get("/", (req,res) => {
    res.status(200);
    res.type('text/html');
    res.sendFile(index);
});



app.listen(PORT, ()=>{
    console.log("SERVER IS STARTED PORT",PORT);
})