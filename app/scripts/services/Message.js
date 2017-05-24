(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    /**
    *@function getRoomById
    *@desc Gets messages by roomId
    *@param {String} roomId
    */
    Message.getRoomById = function(roomId) {
      console.log(roomId);
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    return Message;
  }



  angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
