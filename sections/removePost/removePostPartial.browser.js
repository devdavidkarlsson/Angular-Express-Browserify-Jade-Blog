/* jslint node: true */
'use strict';

function RemovePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
      success(function(data) {
        $scope.post = data.post;
      });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
        success(function(data) {
          $location.url('/');
        });
  };

  $scope.home = function () {
    $location.url('/');
  };
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/removePost/:id', {controller : RemovePostCtrl, templateUrl : '/html/removePost/removePostPartial.html'});
  });
};
