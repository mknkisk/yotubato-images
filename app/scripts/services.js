(function(){
  'use strict';

  angular
    .module('MyApp.services', [])
    .service('ItemLoader', ItemLoader);

  function ItemLoader() {
    this.items = [
      {
        image: 'http://tiqav.com/5KK.jpg',
        name: 'くうきよめ'
      },
      {
        image: 'http://tiqav.com/oH.jpg',
        name: 'よろしくお願いしまう'
      },
      {
        image: 'http://tiqav.com/5KR.jpg',
        name: '私はお金で動く'
      },
      {
        image: 'http://tiqav.com/5Jg.jpg',
        name: 'あー!あー!あー!あー!'
      },
      {
        image: 'http://tiqav.com/5KX.jpg',
        name: 'だめです'
      }
    ];

    this.random = function() {
      return this.items[Math.floor(Math.random() * this.items.length)];
    };
  }
})();
