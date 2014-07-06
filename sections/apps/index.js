/* jslint node: true */
'use strict';

module.exports = function (server) {
  server.get('/apps/api', function (req, res) {
    res.json({
      name: 'David'
    });
  });
};

