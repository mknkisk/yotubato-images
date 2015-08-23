(function(){
  'use strict';

  angular
    .module('MyApp.directives', [])
    .directive('selectOnClick', selectOnClick);

  selectOnClick.$inject = ['$window'];

  /**
   * ref: http://stackoverflow.com/questions/14995884/select-text-on-input-focus
   */
  function selectOnClick($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          if (!$window.getSelection().toString()) {
            // Required for mobile Safari
            this.setSelectionRange(0, this.value.length);
          }
        });
      }
    };
  }
})();
