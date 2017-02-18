angular.module('app').controller('homeCtrl',function($scope, $interval, $stateParams, $rootScope, mainService, $state){
  $scope.getGiphy = function() {
    mainService.getGiphy().then(function(results) {
      if (results.status === 200) {
        console.log(results.data)
        console.log(results.data.data.image_original_url)
        $scope.giphy = results.data.data.image_original_url;
      } else {
          return "Error! " + results.status;
      }
    })
  };
  $scope.getGiphy();

  $scope.getUserGiphy = function(suggestion) {
    mainService.fetchUsersGiphy(suggestion).then(function(results){
      $scope.giphys = results;
      $route.reload();
    })
  }
  //
  // $scope.getUserGiphy(starwars)

  var randomHashTags = [   //copy
      'starwars',
      'fantastic',
      'sports',
      'crazy',
      'stupid',
      'laugh',
      'ducks',
      'silly',
      'fail',
      'scare'
    ];



    function getRandomInt() {
      var max = randomHashTags.length - 1, min = 0;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $scope.suggestionOne = randomHashTags[getRandomInt()];
    var one = $interval(function() {
      $scope.suggestionOne = randomHashTags[getRandomInt()];
    }, 6000);

    $scope.suggestionTwo = randomHashTags[getRandomInt()];
    var one = $interval(function() {
      $scope.suggestionTwo = randomHashTags[getRandomInt()];
    }, 4000);

    $scope.suggestionThree = randomHashTags[getRandomInt()];
    var one = $interval(function() {
      $scope.suggestionThree = randomHashTags[getRandomInt()];
    }, 5000);

    $scope.goToSuggestion = function(suggestion) {
      $state.go('giphy', {genre: suggestion});
      console.log(suggestion);
    };

    $scope.bigPicture = function(item) {
      console.log("item", item);
      $scope.picture = item;
    }


});
