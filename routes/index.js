var express = require('express');
var nunjucks = require('nunjucks');
var router = express.Router();
var Contentstack = require('contentstack');

/* GET home page. */
router.get('/', function (req, res) {

    try {

        var Stack = req.app.locals.Stack;

        var Query = Stack.ContentType('home').Entry('blt600287626b8874df');
        Query
            .includeReference(['article.abstract'])
            // .toJSON()
            .fetch()
            .then(function success(entry) {
                var myEntry = entry.toJSON();
                var data = {data: myEntry}
                res.render('home.html', data);

            }, function error(err) {
                res.send(err)
            });


    } catch (e) {
        console.log("Error ", e)
    }

});

module.exports = router;
