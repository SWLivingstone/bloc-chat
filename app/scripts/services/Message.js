(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.currentRoomId = undefined;

    Message.getRoomById = function(roomId) {
      Message.currentRoomId = roomId;
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage, userName) {
      var timeStamp = new Date().getTime();
      messages.$add({
        content: newMessage,
        roomId: Message.currentRoomId,
        sentAt: timeStamp,
        userName: userName,
      });
    };

    return Message;
  }

  angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
