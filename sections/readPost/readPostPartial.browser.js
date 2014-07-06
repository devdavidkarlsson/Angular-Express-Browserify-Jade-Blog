/* jslint node: true */
'use strict';


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
function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
      success(function(data) {
        $scope.post = data.post;
      });
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/readPost/:id', {controller : ReadPostCtrl, templateUrl : '/html/readPost/readPostPartial.html'});
  });
};
