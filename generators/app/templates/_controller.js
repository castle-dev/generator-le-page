(function() {
  'use strict';

  function <%= controllerName %> () {
    var vm = this;

  }

  angular.module('common.controllers.<%= controllerName %>', [])
    .controller('<%= controllerName %>', <%= controllerName %> );
})();