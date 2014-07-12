/* jslint node: true */
'use strict';

module.exports = function (server) {

  server.delete('/api/post/:id', function (req, res) {
    var id = req.params.id;

    var db = req.db;
    var collection = db.get('posts');

    //console.log(docs);
    // Should build complete response from form data:
    // data.posts[id] = req.body;
    collection.remove({title: id},{w:1});

      res.json(true);
  });
};

