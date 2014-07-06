/* jslint node: true */
'use strict';

var express       = require('express'),
    sections      = require('./sections'),
    http          = require('http'),
    expressLess   = require('express-less'),
    path          = require('path');


/**
  * Create server
  */
var app = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/sections');
app.set('view engine', 'jade');
app.use(express.compress());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use('/css', expressLess(__dirname + '/sections/_default/less'));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(app.router);

/**
 * Routes
 */

// Add the routes from the sections
sections(app);

// serve index and view partials
app.get('/', function (req, res) {
  res.render('_default/index');
});
app.get(/\/html\/([\w\/]+)\.html/, function (req, res) {
  var name = req.params[0];
  res.render(name);
});
/*

 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express app listening on port ' + app.get('port'));
});

