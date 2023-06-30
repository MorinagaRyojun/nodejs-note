const router = require('express').Router();
const path = require('path');

const index = path.join(__dirname,'../webpages/index.html')

router.get("/", (req,res) => {
    res.status(200);
    res.type('text/html');
    res.sendFile(index);
});

router.get("/product",(req,res) => {
    res.send("<h1>Product Page ID:");
})

router.get("/product/:id",(req,res) => {
    const inputId = req.params.id;
    res.send(`<h1>Product Page ID : ${inputId}`);
})


// if error use res.status(404); or some code
module.exports = router;