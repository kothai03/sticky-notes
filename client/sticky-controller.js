var app = angular.module('stickyController', []);

  app.controller('mainController', [
    '$scope',
    '$http',
    'StickyService',
    function ($scope, $http, StickyService) {
      $scope.stickyData = {};
      StickyService
        .get()
        .then(function (result) {
          $scope.stickies = result.data;
        });

      $scope.createSticky = function () {
        if ($scope.stickyData.note) {
          StickyService.create($scope.stickyData)
            .then(function (result) {
              if(result.data.ops.length) 
                $scope.stickies.push(result.data.ops[0]);
            });
        }
      };

      $scope.deleteTodo = function (id) {
        StickyService.delete(id)
          .then(function (data) {
            $scope.stickies = data;
          });
      };
    }
]);