(function(){
  'use strict';

  angular
    .module('MyApp')
    .controller('MainController', MainController);

  MainController.$inject = ['ItemLoader'];

  function MainController(ItemLoader) {
    var vm = this;
    vm.items = ItemLoader.items;
  }
})();
