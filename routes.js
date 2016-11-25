'use strict';
var express = require('express');
var router = express.Router();
var Contentstack = require('contentstack');
var Stack = require('./config/init.js');
var homedata = require('./routes/home.js');
var blogdata = require('./routes/blog.js');
var deasync = require('deasync');

module.exports = function (router) {

    router.get('/', function (req, res) {

        var dataentry;

        var done = false;

        homedata(function cb(res) {
            dataentry = res;
            done = true;
        });

        require('deasync').loopWhile(function () {
            return !done;
        });

        res.render('home.html', dataentry);
    });

    router.get('/blog/:id', function (req, res) {
        var id = req.params.id;
        var data;
        var done = false;

        blogdata(id, function cb(res) {
            data = res;
            done = true;
        });

        require('deasync').loopWhile(function () {
            return !done;
        });
        res.render('blog.html', data);
    });

}