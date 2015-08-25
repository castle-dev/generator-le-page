/* jshint undef:false*/
(function() {
    'use strict';

    describe('ui-router state <%= camelCaseState %>', function() {

        var $rootScope;
        var $state;
        var state = '<%= camelCaseState %>';

        beforeEach(function() {

          inject(function(_$rootScope_, _$state_, $templateCache) {
            $rootScope = _$rootScope_;
            $state = _$state_;

            $templateCache.put('src/common/partials/<%= paramCaseState %=>', '');
          });
        });

        it('should resolve data', function() {
            $state.go(state);
            $rootScope.$digest();
            expect($state.current.name).toBe(state);]
        });
    });

})();