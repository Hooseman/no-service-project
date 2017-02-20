angular.module('app').service('mainService', function($http,$q) {
  var randomBaseUrl = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  // Break up the url into smaller parts
  var baseUrl = 'https://api.giphy.com/v1/gifs/';
  var apiKey = '&api_key=dc6zaTOxFJmzC';

  this.getGiphy = function() {
    return $http({
      method: "GET",
      url: randomBaseUrl
    })
  }


//fetchUsersGiphy expects a search query from controller
//the parameter can be named anything
  this.fetchUsersGiphy = function(giphy) {
    giphy.replace("\\s+","");
    return $http({
      method: 'GET',
      url: baseUrl + "search?q=" + giphy + apiKey
    }).then(function(response){
          //parameter can be named anything. Response just helps better understand what it represents
      if ( response.status === 200) { //checking to see if status is a 200
        console.log('this is working')
        return response.data.data; //returning to controller the array of giphys
      }
      return "failed to load"
    })
  }

  this.getGiphyInfo = function(genre) {  //copy

    return $http({
      method: 'GET',
      url: baseUrl + 'search?q=' + genre + apiKey
    }).then(function(response) {
      return response.data.data;
    })
  }


});
