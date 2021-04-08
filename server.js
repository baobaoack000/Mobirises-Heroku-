// var http = require('http');
// var fs = require('fs');
var express = require('express');
var app = express();

var port = process.env.PORT ||5432;
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'hsneaatxqjqfoj',
  host: 'ec2-18-233-83-165.compute-1.amazonaws.com',
  database: 'dbb1mo1b2j052f',
  password: '5a2c967cc8da33e9b19ed7e402756b05b2c1aa3cd4756215fed2618e647d9351',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'hsneaatxqjqfoj',
  host: 'ec2-18-233-83-165.compute-1.amazonaws.com',
  database: 'dbb1mo1b2j052f',
  password: '5a2c967cc8da33e9b19ed7e402756b05b2c1aa3cd4756215fed2618e647d9351',
  port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})


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

