(function () {
  function MessageCtrl(Message) {

    $scope.send = function() {
      Message.send($scope.message);
      $scope.message = '';

    };
  }

  angular
    .module('blocChat')
    .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
