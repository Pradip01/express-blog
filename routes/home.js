'use strict';
var express = require('express');
var nunjucks = require('nunjucks');
var router = express.Router();
var Contentstack = require('contentstack');
var config = require('./init');

function homedata(callback) {
    var Stack = config();

    var Query = Stack.ContentType('home').Entry('blt600287626b8874df');
    Query
    // .includeReference(['article.abstract'])
    // .toJSON()
        .fetch()
        .then(function success(entry) {
            var myEntry = entry.toJSON();
            var data = myEntry;

            var Query = Stack.ContentType('blog_post').Query();
            Query
                .includeSchema()
                .includeCount()
                .toJSON()
                .limit(4)
                .find()
                .then(function success(result) {
                    var blogdetails = result
                    var dataentry = {"data": data, "blogdetails": blogdetails}
                    callback(dataentry);
                }, function error(err) {
                    res.send(err)
                });
        });


}
module.exports = homedata;
