(function(){
  'use strict';

  describe('MyApp MainController', function(){
    beforeEach(function(){
      jasmine.addMatchers({
        toEqualData: function(util, customEqualityTesters) {
          return {
            compare: function(actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    var scope, ctrl, httpBackend;
    beforeEach(module('MyApp'));
    beforeEach(module('MyApp.services'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      httpBackend = _$httpBackend_;
      var url = 'http://api.tiqav.com/search.json?q=' +
        encodeURIComponent('よつばと') + '&callback=JSON_CALLBACK';
      httpBackend.whenJSONP(url).
          respond([
            {'id': 'XO',  'ext': 'jpg', 'height': 492, 'width': 422, 'source_url': 'http://feb.2chan.net/jun/b/src/1259059339533.jpg'},
            {'id': '5Jo', 'ext': 'jpg', 'height': 616, 'width': 900, 'source_url': 'http://tttqv.sakuratan.com/img2/c1437a1d267329cf6ab4061d3798bdc3.jpg'}
          ]);

      scope = $rootScope.$new();

      ctrl = $controller('MainController', {
        $scope: scope
      });
    }));

    it('should create "items" model with 2 items fetched from xhr', function() {
      expect(ctrl.items).toEqualData(undefined);
      httpBackend.flush();

      expect(ctrl.items).toEqualData(
        [
          {original: 'http://img.tiqav.com/XO.jpg', thumnail: 'http://img.tiqav.com/XO.th.jpg'},
          {original: 'http://img.tiqav.com/5Jo.jpg', thumnail: 'http://img.tiqav.com/5Jo.th.jpg'},
        ]
      );
    });
  });
})();
