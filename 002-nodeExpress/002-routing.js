/*
การกำหนดเส้นทาง URL, อนุญาติการเข้าถึง, และ ตรวจสอบ URL Request
*/
const fs = require('fs');
const http = require('http');
const url = require('url');

const indexPage = fs.readFileSync(`${__dirname}/webpages/index.html`);
const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`,'utf-8');

http.createServer((req,res) => {
    // console.log(url.parse(req.url,true));
    const {pathname,query} = url.parse(req.url,true);
    console.log(query);
    if (pathname==="/" || pathname ==="/home") {
        res.write(indexPage)
    } else if (pathname === "/product") {
        res.end(productPage);
    } else {
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
    
}).listen(3000);