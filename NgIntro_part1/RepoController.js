
(function () {
    var app = angular.module("githubViewer");

    var RepoController = function ($scope, github, $routeParams) {

        var onRepoComplete = function (data) {
            $scope.repo = data;
            github.getRepoContributors(username, reponame).then(onContributors, onError);
        };

        var onContributors = function (data) {
            $scope.contributors = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        var username = $routeParams.username;
        var reponame = $routeParams.reponame;

        github.getRepoDetails(username, reponame)
              .then(onRepoComplete, onError);
    };

    app.controller("RepoController", RepoController);

}())