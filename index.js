'use strict';

var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var path    = require('path');
var bParser = require('body-parser');

var usr     = require('./server/usuarios');

// Rutas de la aplicación
app.use('/css'  , express.static(__dirname + '/public/css'));
app.use('/dist' , express.static(__dirname + '/public/dist'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/image', express.static(__dirname + '/public/image'));
app.use('/js'   , express.static(__dirname + '/public/js'));
app.use('/views', express.static(__dirname + '/public/views'));
app.use('/bower_components', express.static(__dirname + '/public/bower_components'));
app.use('/modules', express.static(__dirname + '/public/modules'));

app.set('view engine', 'ejs');

// Redirecciones de la ruta
app.get('/', (req, res) => {
    res.sendFile( __dirname + '/public/index.html' );
});

app.get('/admin', (req, res) => {
    res.sendFile( __dirname + '/public/views/inicio.html' );
});

app.get('/usuarios', (req, res) => {
    res.sendFile( __dirname + '/public/views/usuarios.html' );
    usr.queryUsuarios();
});

// Servidor
server.listen(8181, () => {
    console.log( '=> http://172.81.2.73:8181' );
});
