

angular.module('scroll',[]).directive('scrollFade', function($window) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var windowEl = angular.element($window);

      windowEl.on('scroll', function () {
        scope.opacity = (100-windowEl.scrollTop())/100>0?(100-windowEl.scrollTop())/100:0;
        scope.$apply();
      });
    }
  };

});