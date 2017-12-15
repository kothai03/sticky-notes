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
        $scope.stickyData = {};
      };

      $scope.updateSticky = function (id, status, index) {
        var index;
        StickyService.update(id, status)
          .then(function (data) {
            if(status === 0) {
                index = $scope.stickies
                  .map(function(sticky){ return sticky.sticky_id; })
                  .indexOf(id);
                $scope.stickies.splice(index, 1);
              }
            else {
              document.getElementById('sticky-class-'+index)
              .setAttribute("style", "background-color: #90EE90");
            }
          });
      };
    }
]);