/* jslint node: true */
'use strict';

module.exports = function (server) {

  // dummy database

  var users = {
    tj: { name: 'tj' }
  };

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

  var hash = require('./pass').hash;


  hash('foobar', function(err, salt, hash){
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash.toString();
  });

  // Authenticate using our plain-object database of doom!

  function authenticate(name, pass, fn) {

    console.log('authenticate method called %s:%s', name, pass);
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    hash(pass, user.salt, function(err, hash){
      if (err) return fn(err);
      if (hash.toString() == user.hash){
        console.log('Auth success');
        return fn(null, user);
      }
      fn(new Error('invalid password'));
    });
  }

  function restrict(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.session.error = 'Access denied!';
      res.redirect('/home');
    }
  }



  server.post('/api/login', function(req,res){
    //data.posts.push(req.body);
    //res.json(req.body);

    //var db = req.db;
    //var collection = db.get('users');

    authenticate(req.body.username, req.body.password, function(err, user){
      if (user) {
        // Regenerate session when signing in
        // to prevent fixation
        req.session.regenerate(function(){
          // Store the user's primary key
          // in the session store to be retrieved,
          // or in this case the entire user object
          req.session.user = user;
          req.session.success = 'Authenticated as ' + user.name + ' click to <a href="/logout">logout</a>. ' + ' You may now access <a href="/restricted">/restricted</a>.';
          console.log(req.session.success);
          //res.redirect('/');
          res.redirect('back');
        });
      } else {
        req.session.error = 'Authentication failed, please check your ' + ' username and password.' + ' (use "tj" and "foobar")';
        res.redirect('#/administrator');
      }
    });
  });
};

