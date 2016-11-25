'use strict';
var express = require('express');
var nunjucks = require('nunjucks');
var router = express.Router();
var config = require('./init');
function blogdata(id, callback) {
    var id = id;
    var Stack = config();
    var Query = Stack.ContentType('blog_post').Entry(id);

    Query
        .fetch()
        .then(function success(entry) {
            var myEntry = entry.toJSON();
            var data = {data: myEntry}
            callback(data);
            // res.render('blog.html', data);

        }, function error(err) {

        });
}
module.exports = blogdata;
