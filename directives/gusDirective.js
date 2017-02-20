angular.module('app').directive('gus', function() {
  return {
    restrict: 'E',
    templateUrl:"../views/gus.html",
    controller: 'aboutCtrl'
  }
})
