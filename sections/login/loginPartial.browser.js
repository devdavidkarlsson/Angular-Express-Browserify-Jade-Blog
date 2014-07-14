/* jslint node: true */
'use strict';

function LoginCtrl($scope, $http, $location) {
  $scope.form = {};

  $scope.login = function () {
    $http.post('/api/login', $scope.form).
        success(function(data) {
          console.log('logged in');
          $location.path('/home');
        });
  };
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/administrator', {controller : LoginCtrl, templateUrl : '/html/login/loginPartial.html'});
  });
};
