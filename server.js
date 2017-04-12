var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/node_modules", express.static('node_modules'));
app.use("/client", express.static('client'));

app.get('/', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.listen(4200);
console.log('Listening on port 4200');

module.exports = app;

require('./server/routes');
