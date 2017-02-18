angular.module('app',['ui.router','ngClipboard'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');


    $stateProvider
    .state('login', {
      url:'/',
      templateUrl:"./login.html",
      controller: "loginCtrl"
    })

    .state('home', {
      url:'/home',
      templateUrl:"./home.html",
      controller: 'homeCtrl'
    })

    .state('homeOne', {
      url:'/homeOne',
      templateUrl:"./homeOne.html",
      controller: 'homeCtrl'
    })

    .state('about', {
      url:'/about',
      templateUrl:"./about.html"

    })
    .state('game',{
      url:'/game',
      templateUrl:"./game.html"

    })
    .state('play', {
      url:'/play',
      templateUrl:"./play.html",
      controller: ''

    })
    .state('giphy', {
        url: '/giphy/:genre',
        templateUrl: './views/giphy.html',
        controller: 'giphyCtrl',
        resolve: {
          giphyData: function($stateParams, giphyService) {
            return giphyService.getGiphyInfo($stateParams.genre);
          }
        }
      })
    // $urlRouterProvider
    //         .otherwise('/');
  });
