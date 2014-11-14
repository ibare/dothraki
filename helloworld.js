var express = require('express');
var path = require('path');
var format = require('util').format;
var template = require('./mylib/template');
var app = express();
var server;

app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ibare/', function (req, res) {
  res.send('Hello ibare!!');
});

app.get('/users/:name', function (req, res) {
  res.send(format('Hello %s!!', req.params.name));
});

app.get('/index.html', index);
app.get('/template/', template);

function index(req, res) {
  res.send('<html><body><h1>Hello world!</h1></body></html>');
}

server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('브라우저로 접속할 수 있는 상태가 되었습니다. http://%s:%s', host, port);
});
