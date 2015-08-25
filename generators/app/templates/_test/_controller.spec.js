/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.controllers.<%= controllerName %> module', function() {
    var controller;
    beforeEach(module('common.controllers.<%= controllerName %>'));
    beforeEach(inject(function($controller) {
      controller = $controller('<%= controllerName %>', {});
    }));

    describe('<%= controllerName %>', function() {
      it('should exist', function() {
        expect(controller).toBeDefined();
      });
    });
  });
})();