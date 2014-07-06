/* jslint node: true */
'use strict';

function cvCtrl($scope, $http) {
  $scope.send = function () {
    $http({
      data    : $scope.ask,
      method  : 'POST',
      url     : '/cv/api'
    }).success(function () {
      //
    });
  };
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/cv', {controller : cvCtrl, templateUrl : '/html/cv/cvPartial.html'});
  });
};
