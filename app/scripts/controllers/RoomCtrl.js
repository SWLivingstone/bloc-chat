(function() {
  function RoomCtrl (Room) {
    this.rooms = Room;
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
