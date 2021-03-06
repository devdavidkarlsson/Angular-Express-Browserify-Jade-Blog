/* jslint node: true */
'use strict';

function homeCtrl($scope, $http, parallaxHelper) {


  $scope.background = parallaxHelper.createAnimator(-0.3);


  $scope.get = function () {
    console.log('home get');




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


