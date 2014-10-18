/* jslint node: true */
'use strict';

function LoginCtrl($scope, $http, $location,$window,$route) {
  $scope.alerts = [
    //{ type: 'danger', msg: 'Oh snap! Change a few things up and try login in again.' },
    { type: 'success', msg: 'You are logged in. Navigate the page using the top menu.' }
  ];

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };


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
