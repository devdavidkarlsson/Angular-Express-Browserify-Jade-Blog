/* jslint node: true */
'use strict';

function LoginCtrl($scope, $http, $location,$window,$route) {
  $scope.form = {};

  $scope.login = function () {
    $http.post('/api/login', $scope.form).
        success(function(data) {
          console.log('login post');
          $window.location.reload();

        });
  };

  $scope.loggout = function () {
    $http.get('/logout').success(function(){console.log("BYE!");});
  };

  }

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/administrator', {controller : LoginCtrl, templateUrl : '/html/login/loginPartial.html'});
  });
};
