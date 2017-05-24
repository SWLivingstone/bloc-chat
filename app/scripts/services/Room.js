(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    Room.currentRoom = "Select a Chatroom!";
    Room.currentRoomId = 1234;

    Room.add = function(room) {
      rooms.$add(room);
    };

    Room.setRoom = function(room) {
      Room.currentRoom = room.$value;
      Room.currentRoomId = room.$id;
    };

    return Room;
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
