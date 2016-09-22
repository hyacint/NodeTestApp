var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! - <a href="/foo">foo</a>');
});

app.get('/foo', function (req, res) {
  res.send('Hello Foo!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});