angular.module('app').directive('john', function() {
  return {
    restrict: 'E',
    templateUrl:"../views/john.html",
    controller: 'aboutCtrl'
  }
})
