/* jslint node: true */
'use strict';

function appsCtrl($scope, $http,parallaxHelper) {

  $scope.background = parallaxHelper.createAnimator(-0.3);

  $scope.bricks = [
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'},
    { src: 'http://lorempixel.com/g/280/542/?802'}
  ];


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
