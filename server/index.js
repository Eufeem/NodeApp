var express = require('express');
var app     = express();
var server  = require('http').Server(app);

app.get('/public', function (req, res) {
    res.send('Hello World!');
});

server.listen(8181, function () {
    console.log('Open server in http://192.168.0.12:8181');
});
