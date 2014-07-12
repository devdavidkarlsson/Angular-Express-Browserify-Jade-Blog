 /* jslint node: true */
'use strict';



module.exports = function (server) {

  server.get('/api/post/:id', function (req, res) {
    var id = req.params.id;


    var db = req.db;
    var collection = db.get('posts');
    collection.find({title: id.replace(/_/g, ' ')},{},function(e,docs){
      console.log(docs);
      res.json({post: docs[0]});
      console.log('RETURNING: '+ docs);

    });


   /* if (id >= 0 && id < data.posts.length) {
      res.json({
        post: data.posts[id]
      });
    } else {
      res.json(false);
    }*/
  });
};


