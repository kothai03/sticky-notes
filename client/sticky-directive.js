var app = angular.module('stickyDirective', []);

// Directive for sticky.
app.directive("stickyNote", function () {
  return {
    templateUrl: 'sticky-template.html',
  };
});
