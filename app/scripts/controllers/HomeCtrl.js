(function () {
  function HomeCtrl($window, $cookies, Room, $uibModal, $scope, Message) {
    this.rooms = Room.all;
    this.add = Room.add();
    this.currentRoom = "Select a Chatroom!";
    $scope.window = $window;

    this.setRoom = function (room) {
      this.currentRoom = room.$value;
      this.currentRoomId = room.$id;
      this.messages = Message.getRoomById(this.currentRoomId);
      $('.chat-window').animate({
        scrollTop: $('.chat-window')[0].scrollHeight});
    };

    var myInterval = setInterval(function(){
      $scope.$apply(function () {
          $scope.user = $cookies.get('blocChatCurrentUser');
      });

      if ($scope.user) {
        clearInterval(myInterval);
      }
    }, 500);

    $scope.send = function() {
      Message.send($scope.message, $scope.user);
      $scope.message = '';
      $('.chat-window').animate({
        scrollTop: $('.chat-window')[0].scrollHeight},2000);

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
    .controller('HomeCtrl', ['$window','$cookies','Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
