angular.module('app').controller('gameCtrl', function($scope, gameService, mainService) {
    $scope.errorCount = 0;
    $scope.notMatching = false;
    $scope.model = {};
    $scope.getGameTerm = function() {
        var term = gameService.getGameTerm()
        //   //needs to display a seperate input for each letter in the term
        //   //split term into an array of letters
        //   //get the giphy and set on scope
        //   //matches the each input against an assigned value
        //   //  if the input = the assigned value then display a checkmark and congrats them
        //   //    if not display the next picture in the hangman sequence\
        var inputBoxes = term.split('');
        $scope.inputBoxes = [];
        inputBoxes.forEach(function(k, i) {
            $scope.model[k] = '';
            $scope.inputBoxes.push({character: k})
        })
        getGiphy(term);
    };
    // $scope.hangmanDisplay = [
    //   { url: “some/url”, display: false },
    //   { url: “some/url”, display: false }
    // ]

    var getGiphy = function(suggestion) {
        mainService.fetchUsersGiphy(suggestion).then(function(results) {
            console.log(results[0])
            $scope.giphy = results[0];
        })
    }

    $scope.checkGuess = function(input, guess, index) {
        console.log('fired checkGuess')
        if ($scope.inputBoxes[index].character === guess ) {
            console.log("matches")
            $scope.matching = true;
            $scope.checkCount++;
            createCheckDisplay();
            setTimeout(function() {

                console.log('match')
                $scope.matching = false;
            }, 1000)

        } else {
            $scope.notMatching = true;
            $scope.errorCount++;
            createErrorDisplay();
            setTimeout(function() {
                $scope.model[input.character] = '';
                console.log('not matching')
                $scope.notMatching = false;
            }, 500)
        }
    }
    $scope.getHangmanStatus = function() {
        var status = {
            0: 'none',
            1: 'first-error',
            2: 'second-error',
            3: 'third-error',
            4: 'fourth-error',
            5: 'fifth-error',
            6: 'sixth-error',
            7: 'seventh-error',
            8: 'eighth-error',
            9: 'ninth-error',
            10: 'ten-error',
            11: 'eleven-error',
            12: 'twelve-error',
            13: 'thirteen-error',
            14: 'fourteen-error',
            15: 'fifteen-error',
            16: 'sixteen-error',
            17: 'seventeen-error'
        }
        return status[$scope.errorCount || 0]
        return status [$scope.checkCount || 0]
    }

    function createErrorDisplay() {
        $scope.errorDisplay = [];
        for (var i = 0; i < $scope.errorCount; i++) {
            $scope.errorDisplay.push(i);
        }
    }

    function createCheckDisplay() {
        $scope.checkDisplay = [];
        for (var i = 0; i < $scope.checkCount; i++) {
            $scope.checkDisplay.push(i);
        }
    }



});
