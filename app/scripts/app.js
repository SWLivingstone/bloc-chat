(function () {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('newRoomForm', {
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/newRoomForm.html'
      });
  }

  angular
      .module('blocChat',[ 'ui.bootstrap', 'ui.router', 'firebase'])
      .config(config);
})();
