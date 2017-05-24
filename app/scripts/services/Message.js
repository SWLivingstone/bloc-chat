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
      var room = ref.orderByChild('roomId').equalTo(roomId);
      var roomChats;
      room.on("value", function(response) {
        roomChats = response.val();
      });
      return roomChats;
    };

    /**
    *@function showConversation
    *@desc Gets messages by roomId and pushes them to an array.
    *@param {String} roomId
    */
    Message.showConversation = function(roomId) {
      var chats = Message.getRoomById(roomId);
      // If chats is not an array of objects turn chats
      // into an array of objects.
      if (typeof chats === 'object') {
        chats = Object.values(chats);
      }
      var conversation = [];
      // if chats is not null loop through chats and
      // push to conversation array.
      if (chats !== null && chats !== undefined) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i] !== undefined) {
          conversation.push(chats[i]);
          }
        }
    }
      return conversation;
    };

    return Message;
  }



  angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
