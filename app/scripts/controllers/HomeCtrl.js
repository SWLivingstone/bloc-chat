(function () {
  function HomeCtrl(Room, $uibModal, $scope) {
    this.rooms = Room;
    this.add = Room.add();

    $scope.open = function () {
      $uibModal.open({
        animation: true,
        templateUrl:'/templates/newRoomForm.html',
        controller: 'ModalCtrl',
        backdrop: 'static'
    });
  };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
