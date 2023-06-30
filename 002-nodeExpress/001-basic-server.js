const http = require('http');

const server = http.createServer((req,res) => {
    const htmlOutput = `
    <h1>This is My Page.</h1>
    <p>This website created by RYOJUN MORINAGA.</p>
    `
    res.write("<h1>Hello!!! Server is Started.</h1>")
    res.end(htmlOutput);
})
server.listen(3000, () => {
    console.log("Server is Started.")
});

// สามารถเขียนย่อลงได้
/*
http.createServer((req,res) => {
    res.write("<h1>Hello!!! Server is Started.</h1>")
    res.end();
}).listen(3000, () => {
    console.log("Server is Started.")
});

*/

// listen สามารถระบุ Host ได้ด้วย
/*
server.listen(3000,'localhost', () => {
    console.log("Server is Started.")
});
*/