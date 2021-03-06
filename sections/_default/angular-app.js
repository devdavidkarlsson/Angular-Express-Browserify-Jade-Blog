/* jslint node: true */
'use strict';
var di = require('di');
var angular = require('angular');
require('angular-resource');
require('angular-route');
require('bootstrap');
require('angular-bootstrap');
require('angular-animate');
require('angular-sanitize');
require('text-angular');
require('text-angular-setup');
require('outlayer-item');
require('outlayer');
require('jquery-bridget');
require('ng-scroll');
require('ng-parallax');
require('scroll');



angular.module('customFilters', []).
    filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '_');
      };
    });

//Replace module name "developdavid" with your app name.

var app = angular.module('developdavid', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'customFilters',
    'ngAnimate',
    'ngSanitize',
    'textAngular',
    'duParallax',
    'scroll'
    ]);
app.config(function ($routeProvider) {
  $routeProvider.otherwise({redirectTo : '/home'});
});

var uiModules = {
  angular   : [ 'value', angular ],
  app       : [ 'value', app ]
};
uiModules.uiModules = [ 'value', uiModules ];

var injector = new di.Injector([uiModules]);

/* modules browserify */


