(function(){
  'use strict';

  angular
    .module('MyApp')
    .controller('MainController', MainController);

  MainController.$inject = ['ItemLoader'];

  function MainController(ItemLoader) {
    var vm = this;
    vm.items = ItemLoader.items;
    vm.selectedItem = ItemLoader.random();
    vm.select = select;

    /**
     * Select image
     * @param  {object} item selected item
     * @return {undefined}
     */
    function select(item) {
      vm.selectedItem = item;
    }
  }
})();
