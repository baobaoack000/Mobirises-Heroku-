var http = require('http');
var fs = require('fs');
const express = require('express')
const app = express()
const router = express.Router();

const port=8080
// app.get('/', (req, res) => res.sendFile('index.html'));
// app.use(express.static('assets'))

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use('/',router);
app.listen(process.env.port || 3000);
console.log(`Example app listening on port port! /n click here: http://localhost:${port}`)
// app.listen(port, () => console.log(`Example app listening on port port! /n click here: http://localhost:${port}`))


// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });

