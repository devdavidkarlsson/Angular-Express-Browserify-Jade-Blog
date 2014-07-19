/* jslint node: true */
'use strict';

module.exports = function (server) {

  server.post('/api/addPost', function(req,res){
    //data.posts.push(req.body);
    //res.json(req.body);
    if (req.session.user) {
    var db = req.db;
    var collection = db.get('posts');

    //console.log(docs);
    // Should build complete response from form data:
    // data.posts[id] = req.body;
    var newTitle = req.body.title;
    console.log('newTitle:' + newTitle);
    collection.insert({title: newTitle, text: req.body.text},{w:1}, function (e,count){
      collection.find({title: newTitle},{},function(e,docs){
        res.json({post: docs[0]});
        console.log('RETURNING: '+ docs[0]);
      });
    });

      }
    else{
      res.redirect('#/administrator');
    }
  });
};

//Make sure title is not already in database...