(function(){
  'use strict';

  angular
    .module('MyApp.services', [])
    .factory('ItemLoader', ItemLoader);

  ItemLoader.$inject = ['$http', '$q'];

  function ItemLoader($http, $q) {

    return {
      load: load
    };

    function load() {
      var delay = $q.defer();
      var uri = 'http://api.tiqav.com/search.json?q=' +
        encodeURIComponent('よつばと') + '&callback=JSON_CALLBACK';

      $http.jsonp(uri, { cache: true }).then(function(res){
        delay.resolve(res.data);
      }, function(res){
        delay.reject(res);
      });

      return delay.promise;
    }
  }
})();
