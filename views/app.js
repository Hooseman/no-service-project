angular.module('app',['ui.router','ngClipboard'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');


    $stateProvider
    .state('login', {
      url:'/',
      templateUrl:"./views/login.html"
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
      templateUrl:"./about.html",
      controller: 'aboutCtrl'

    })
    .state('game',{
      url:'/game',
      templateUrl:"./game.html",
      controller: 'gameCtrl'
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

  });
