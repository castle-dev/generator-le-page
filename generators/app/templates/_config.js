(function() {
  'use strict';

  var stateName = '<%= camelCaseState %>';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider, lazyLoadServiceProvider) {
    $stateProvider
      .state(stateName, {
        url: '<%= url %>',
        views: {
          '@': {
            templateUrl: lazyLoadServiceProvider.getStateTemplateFileName(stateName),
            controller: '<%= controllerName %>',
            controllerAs: 'vm'
          }
        },
        resolve: {
          session: function (sessionService) {
            return sessionService.waitForLoggedInSession();
          },
          load: function (lazyLoadService) {
            return lazyLoadService.fetchStateDependencies(stateName);
          }
        }
      });
  }

  angular.module('common.routes.<%= camelCaseState %>', [
    'common.services.lazyLoad',
    'common.services.session'
  ])
    .config(config);
})();
