// var http = require('http');
// var fs = require('fs');
var express = require('express');
var app = express();

var port = process.env.PORT ||3333;


app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/views'));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "index.html");
  });


// app.get('/views/Contact.html', (req, res) => {
//     res.sendFile(`<h1 class="mbr-section-title mb-4 display-2">
//                                 <strong>Contact Us</strong>
//                             </h1>`);
//   });

// app.get('/', (req, res) => res.render('index'));
// console.log(`Example app listening on port port! /n click here: http://localhost:${port}`)

app.listen(port, () => console.log(`Example app listening on port port! /n click here: http://localhost:${port}`))


// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });

