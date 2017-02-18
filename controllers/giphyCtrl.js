angular.module('app').controller('giphyCtrl', function($scope, mainService, $rootScope, giphyData, ngClipboard) {
  if (giphyData) {
  $scope.giphyInfo = giphyData;
  $scope.picture = $scope.giphyInfo[0];
}

});
