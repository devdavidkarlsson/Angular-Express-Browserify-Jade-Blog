/* jslint node: true */
'use strict';

function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};

  $scope.submitPost = function () {
    $http.post('/api/addPost', $scope.form).
        success(function(data) {
          $location.path('/');
        });
  };
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/addPost', {controller : AddPostCtrl, templateUrl : '/html/addPost/addPostPartial.html'});
  });
};
