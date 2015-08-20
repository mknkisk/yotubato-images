(function(){
  'use strict';

  angular
    .module('MyApp')
    .controller('MainController', MainController);

  MainController.$inject = ['ItemLoader'];

  var TIQAV_IMAGE_HOST = 'http://img.tiqav.com/';

  function MainController(ItemLoader) {
    var vm = this;
    vm.select = select;

    /**
     * Select image
     * @param  {object} item selected item
     * @return {undefined}
     */
    function select(item) {
      vm.selectedItem = item;
    }

    function _convertResponse(items) {
      var convertedList = [];
      angular.forEach(items, function(_item){
        convertedList.push({
          original: TIQAV_IMAGE_HOST + _item.id + '.' + _item.ext,
          thumnail: TIQAV_IMAGE_HOST + _item.id + '.th.' + _item.ext,
        });
      });

      return convertedList;
    }

    function _random(items) {
      return items[Math.floor(Math.random() * items.length)];
    }

    /**
     * initialize
     * @return {undefined}
     */
    function _init() {
      ItemLoader.load()
        .then(function(items){
          vm.items = _convertResponse(items);
          vm.selectedItem = _random(vm.items);
        }, function(res){
          console.error(res);
          window.alert('loading error :(');
        });
    }

    _init();
  }
})();
