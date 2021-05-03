var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Express' });
});
router.get('/Form', function(req, res, next) {
  res.render('Form', { title: 'Express' });
});
router.post('/Contact/create', function(req, res, next) {
  ({
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
  })
  console.log(req.params)
});



module.exports = router;
