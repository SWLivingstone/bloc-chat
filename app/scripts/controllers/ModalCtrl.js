(function () {
  function ModalCtrl($rootScope, $cookies, Room, $scope, $uibModalInstance) {

    $scope.newRoom = '';

    $scope.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };

    $scope.create = function (){
      Room.add($scope.newRoom);
      $uibModalInstance.close($scope.newRoom);
    };

    $scope.submit = function (name) {
      if (!$scope.name || $scope.name === '') {
        alert("Please enter a username.");
      } else {
        $cookies.put('blocChatCurrentUser', $scope.name);
        $uibModalInstance.close($scope.name);
        alert("Welcome " + $cookies.get('blocChatCurrentUser') + ", enjoy your stay!");
      }
    };

}

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$rootScope','$cookies','Room', '$scope', '$uibModalInstance', ModalCtrl]);
})();
