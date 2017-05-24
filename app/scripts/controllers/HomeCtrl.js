(function () {
  function HomeCtrl(Room, $uibModal, $scope, Message) {
    this.rooms = Room.all;
    this.add = Room.add();
    this.currentRoom = "Select a Chatroom!";


    this.setRoom = function (room) {
      this.currentRoom = room.$value;
      this.currentRoomId = room.$id;
      this.messages = Message.getRoomById(this.currentRoomId);
    };

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
