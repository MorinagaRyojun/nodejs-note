/* Introduction code.This code is basic form for node run this code by use command : node app.js */
const express = require('express');
// const router = express.Router()

const path = require('path');

const app = express();
const PORT = 3000;

const routerPath = require('./routes')
// const index = path.join(__dirname,'/webpages/index.html')

// router.get("/", (req,res) => {
//     res.status(200);
//     res.type('text/html');
//     res.sendFile(index);
// });

app.use('/',routerPath)

// app.use(router);
// res.redirect('/');

app.listen(PORT, ()=>{
    console.log("SERVER IS STARTED PORT",PORT);
})