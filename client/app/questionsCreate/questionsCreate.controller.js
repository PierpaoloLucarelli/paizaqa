'use strict';

angular.module('paizaqaApp')
  .controller('QuestionsCreateCtrl', function ($scope, $http, $location, Auth) {
    if(! Auth.isLoggedIn()){
      $location.path('/login');
      $location.replace();
      return;
    }
    $scope.submit = function() {
        $scope.question.slug = "test_slug";
        console.log($scope.question);
      $http.post('/api/questions', $scope.question).success(function(){
        $location.path('/');
      });
    };
  });
