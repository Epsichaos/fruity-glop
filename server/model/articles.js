var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    id: String,
    title: String,
    date: Date,
    content: String,
    abstract: String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
