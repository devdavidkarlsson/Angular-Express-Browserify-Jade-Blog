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
  server.post('/api/addPost', function(req,res){
    data.posts.push(req.body);
    res.json(req.body);
  });
};

//Make sure title is not already in database...