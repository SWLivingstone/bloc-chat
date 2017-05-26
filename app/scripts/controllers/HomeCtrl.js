(function () {
  function HomeCtrl( $rootScope, $cookies, Room, $uibModal, $scope, Message) {
    this.rooms = Room.all;
    this.add = Room.add();
    this.currentRoom = "Select a Chatroom!";
    $scope.user = $rootScope.user;

    this.setRoom = function (room) {
      this.currentRoom = room.$value;
      this.currentRoomId = room.$id;
      this.messages = Message.getRoomById(this.currentRoomId);
    };

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.user = $cookies.get('blocChatCurrentUser');
        });
    }, 5000);

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.user = $cookies.get('blocChatCurrentUser');
        });
    }, 10000);

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.user = $cookies.get('blocChatCurrentUser');
        });
    }, 15000);

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
    .controller('HomeCtrl', ['$rootScope', '$cookies','Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
