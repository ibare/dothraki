var express = require('express');
var morgan = require('morgan');
var path = require('path');
var format = require('util').format;
var app = express();
var server;

app.use(express.static(__dirname + '/static'));
app.use(morgan('dev'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('gugudan', { guguInfo: {}}); 
});

app.get('/gugu', function(req, res) {
    var danNumber = req.query.dan || 2;
    var temp, saveCalc = [];
    
    console.log(Number(danNumber));
    
    if(isNaN(Number(danNumber))) {
        res.send('숫자만 입력해 주세요.');
        return;
    }
    
    for(var i=1; i <= 9; i++) {
        temp = format('%d * %d = %d', danNumber, i, danNumber*i);
        saveCalc.push(temp);
    }
    
    console.log(saveCalc);
    
    res.render('gugudan', { guguInfo: { dan: danNumber, result: saveCalc }});
});

server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('구구단 서버가 시작되었습니다. http://%s:%s', host, port);
});
