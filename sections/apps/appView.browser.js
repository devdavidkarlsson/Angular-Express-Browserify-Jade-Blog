/* jslint node: true */
'use strict';

function appsCtrl($scope, $http) {
  $scope.send = function () {
    $http({
      data    : $scope.ask,
      method  : 'POST',
      url     : '/apps/api'
    }).success(function () {
      //
    });
  };
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/apps', {controller : appsCtrl, templateUrl : '/html/apps/appsPartial.html'});
  });
};
