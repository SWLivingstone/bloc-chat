(function () {
  function ModalCtrl(Room, $scope, $uibModalInstance) {

    $scope.newRoom = '';

    $scope.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };

    $scope.create = function (){
      Room.add($scope.newRoom);
      $uibModalInstance.close($scope.newRoom);
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', ModalCtrl]);
})();
