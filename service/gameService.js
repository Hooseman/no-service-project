angular.module('app').service('gameService', function( ) {
  this.getGameTerm = function() {
    var possibleTerms = [
      "punisher",
      "wrench",
      "rocket",
      "lukeskywalker",
      "deathstar",
      "bunny",
      "starfleet"
    ];
    var termIndex = Math.floor(Math.random()*((possibleTerms.length - 1) - 0 + 1) + 0);
    return possibleTerms[termIndex];
  }


});
