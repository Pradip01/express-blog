'use strict';
var express = require('express');
var Contentstack = require('contentstack');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var app = express();
var router = express.Router();
require('./routes.js')(router);

// view engine setup
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

module.exports = app;
