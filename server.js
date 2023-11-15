var express = require('express');

var app = express();

app.length('/', function(req, res){
    res.sendfile('main.html');
});

app.listen(8000);

console.log('Сервер запущен!');