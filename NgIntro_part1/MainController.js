(function () {

    var app = angular.module("githubViewer");

    var MainController = function ($scope, $interval, $location) {

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }

        var countdownIntervall = null;

        var startCountdown = function () {
            countdownIntervall = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = function (username) {
            if (countdownIntervall) {
                $interval.cancel(countdownIntervall);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        }

        $scope.username = "angular";
        $scope.countdown = 5;
        
        startCountdown();
    }

    app.controller("MainController", MainController);
}());
