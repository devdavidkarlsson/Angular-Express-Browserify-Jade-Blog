/* jslint node: true */
'use strict';

module.exports = function (server) {
  server.get('/home/api', function (req, res) {
    res.json({
      name: 'David'
    });
  });
};

