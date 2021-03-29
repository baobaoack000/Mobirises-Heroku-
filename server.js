// var http = require('http');
// var fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');
const port = process.env.port || 8000;




router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname));
  //__dirname : It will resolve to your project folder.
});




app.use('/', router);
app.use(express.static(__dirname));
app.get('/', (req, res) => res.render('index.html'));
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

