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
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/blog');

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/sections');
app.set('view engine', 'jade');
app.use(express.compress());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use('/css', expressLess(__dirname + '/sections/_default/less'));
app.use('/fonts', express.static(__dirname + '/bower_components/font-awesome/fonts'));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/vendor', express.static(__dirname + '/bower_components'));

//App auth:

// middleware

app.use(express.cookieParser('shhhh, very secret'));
app.use(express.session());

// Session-persisted message middleware

app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

app.get('/logout', function(req, res){
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function(){
    res.redirect('/');
  });
});


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

