/* jslint node: true */
'use strict';

module.exports = function (server) {

  /*var data = {
    "posts": [
      {
        "id": 0,
        "title": "Lorem ipsum",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 1,
        "title": "Sed egestas",
        "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
      }
    ]
  };*/

  server.get('/api/posts', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.find({},{},function(e,docs){
      console.log(docs);
      res.json(docs);
      console.log('RETURNING: '+ docs);

    });

  });
};


/*[{
 title: 'Bob',
 message: 'He spent fifteen years getting loaded. Fifteen years till his liver exploded. Now whats Bob gonna do now that he cant drink?'
 },{ title: 'Bob',
 message: 'He spent fifteen years getting loaded. Fifteen years till his liver exploded. Now whats Bob gonna do now that he cant drink?'
 }]*/



