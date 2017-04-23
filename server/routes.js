var mongoose = require('mongoose');
var app = require('../server');
var md5 = require('md5');
var Article = require('./model/articles');

mongoose.connect('mongodb://localhost/sandbox');

/* POST ARTICLE ROUTE */
app.post('/articles', function(req, res) {
  console.log('Received: ' + req.body.title +', ' + req.body.content);
  var article = new Article({
    id: md5(req.body.title),
    title: req.body.title,
    date: new Date(/*req.body.date*/),
    content: req.body.content,
    abstract: req.body.abstract
  });
  article.save(function(err) {
    if(err) {
      console.log(err);
      res.send('Cannot object in DB', 500);
    }
    res.send('OK', 200);
  })
});

/* GET ALL ARTICLES ROUTE */
app.get('/articles', function(req, res) {
  Article.find({}, function(err, article) {
    if(err) {
      res.send('Cannot fetch DB object', 500);
    }
    res.send(article, 200);
  })
});

/* GET ARTICLE FROM ROUTE */
app.get('/article/:id', function(req, res) {
  console.log('GET article');
  Article.findOne({}, function(err, article) {
    if(err) {
      res.send('Cannot fetch DB object', 500);
    }
    res.send(article, 200);
  })
});
