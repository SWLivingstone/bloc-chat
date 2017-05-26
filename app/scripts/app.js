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
      });

  }

  angular
      .module('blocChat',[ 'ngCookies', 'ui.bootstrap', 'ui.router', 'firebase'])
      .config(config);
})();

(function() {
  function BlocChatCookies($rootScope, $uibModal, $cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
          animation: true,
          templateUrl:'/templates/enterUserName.html',
          controller: 'ModalCtrl',
          backdrop: 'static'
      });

    }
    if (currentUser) {
    alert("Welcome back " + currentUser + ", enjoy your stay!");
    $rootScope.user = currentUser;
  } 
}


  angular
    .module('blocChat')
    .run(['$rootScope','$uibModal','$cookies', BlocChatCookies]);
})();
