(function () {
  function HomeCtrl( $timeout, $cookies, Room, $uibModal, $scope, Message) {
    this.rooms = Room.all;
    this.add = Room.add();
    this.currentRoom = "Select a Chatroom!";
    this.user =

    $timeout(function () {
        $scope.$apply(function () {
            var user = $cookies.get('blocChatCurrentUser');
            return user;
        });
    }, 2000);



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
    .controller('HomeCtrl', ['$timeout', '$cookies','Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
