angular.module('app').controller('aboutCtrl', function($scope) {
  $scope.showSterling = false;
  $scope.showGus = false;
  $scope.showJohn = false;

  $scope.clickSterling = function() {
    $scope.showSterling = !$scope.showSterling;
    setTimeout(function() {
      $scope .showSterling = false;
    }, 30500)
    }


  $scope.clickGus = function() {
    $scope.showGus = !$scope.showGus;
    setTimeout(function() {
      $scope .showGus = false;
    }, 10500)
  }

  $scope.clickJohn = function() {
    $scope.showJohn = !$scope.showJohn;
    setTimeout(function() {
      $scope .showJohn = false;
    }, 10500)
  }
})
