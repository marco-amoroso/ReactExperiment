var express = require('express');
var app = express();
var router = express.Router();

// Load Static assets from /public folder
app.use(express.static(__dirname + '/www'));

// app.get('/', function(req, res){
//   res.render('index.ejs');
// });
// app.get('/', function(req, res){
//   res.render('index.html');
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
