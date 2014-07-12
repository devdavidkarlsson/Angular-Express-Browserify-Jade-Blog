/* jslint node: true */
'use strict';

module.exports = function (server) {


  server.put('/api/post/:id', function (req, res) {

    var id = req.params.id;

    var db = req.db;
    var collection = db.get('posts');

      //console.log(docs);
      // Should build complete response from form data:
      // data.posts[id] = req.body;
      var newTitle = req.body.title;
      console.log('newTitle:' + newTitle);


      collection.update({title: id.replace(/_/g, ' ')},{title: newTitle, text: req.body.text}, function (e,count){
        collection.find({title: newTitle},{},function(e,docs){
          res.json({post: docs[0]});
          console.log('RETURNING: '+ docs[0]);
        });
      });
  });
};
