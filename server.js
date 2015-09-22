var express = require('express');
var app = express();
var router = express.Router();

// Load Static assets from /public folder
app.use(express.static(__dirname + '/public'));

// respond with "Hello World!" on the homepage
app.get('/login', function (req, res) {
  res.sendFile('/routes/login.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
