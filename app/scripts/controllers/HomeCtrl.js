(function () {
  function HomeCtrl(Room, $uibModal, $scope, Message) {
    this.rooms = Room;
    this.add = Room.add();
    this.message = Message;

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
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
