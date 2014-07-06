/* jslint node: true */
'use strict';

module.exports = function (server) {

  var data = {
    "posts": [
      {
        "title": "Lorem ipsum",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "title": "Sed egestas",
        "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
      }
    ]
  };

  server.delete('/api/post/:id', function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
      data.posts.splice(id, 1);
      res.json(true);
    } else {
      res.json(false);
    }
  });
};

