var app = angular.module('stickyDirective', []);

app.directive("stickyNote", function () {
  return {
    templateUrl: 'sticky-template.html',
  };
});
