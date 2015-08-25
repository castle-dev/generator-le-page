(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('<%= camelCaseState %>', {
        url: '<%= url %>',
        views: {
          '@': {
            templateUrl: 'src/common/partials/<%= paramCaseState %>.tpl.html',
            controller: '<%= controllerName %>'
          }
        }
      });
  }

  angular.module('common.routes.<%= camelCaseState %>', [])
    .config(config);
})();