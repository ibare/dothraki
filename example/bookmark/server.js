var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    Datastore = require('nedb'),
    db = new Datastore({ filename: '_data/bookmarks.db' });
    app = express();

db.loadDatabase();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/bookmarks', function(req, res) {
  // res.send({
  //   bookmarks: [
  //     { title: '좋은 글', url: 'http://www.google.com' },
  //     { title: '좋은 글', url: 'http://www.google.com' },
  //     { title: '좋은 글', url: 'http://www.google.com' }
  //   ]
  // });
  db.find({}, function(err, rows) {
    res.send({ bookmarks: rows });
  });
});

app.post('/api/bookmarks', function(req, res) {
  db.insert({ title: req.body.title, url: req.body.url, timestamp: Date.now() }, function(err, newDoc) {

    console.log(newDoc);

    res.redirect('/');
  });
});

server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.info('북마크 서버가 시작되었습니다. http://%s:%s', host, port);
});
