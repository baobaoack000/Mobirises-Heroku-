// var http = require('http');
// var fs = require('fs');
var express = require('express');
var app = express();

var port = process.env.PORT;



app.use(express.static(__dirname + '/'));
app.get("/", (request, response) => {
   response.sendFile(__dirname + "/views/index.html");
    });
  
// app.get('/', (req, res) => res.render('index'));notworking
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

