/* jslint node: true */
'use strict';

function homeCtrl($scope, $http) {
  $scope.get = function () {
    $http({
      data    : $scope.ask,
      method  : 'get',
      url     : '/api/posts'
        }).success(function (data) {
          $scope.posts = data;
    });
  };
  $scope.get();

}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/home', {controller : homeCtrl, templateUrl : '/html/home/homePartial.html'});
  });
};
