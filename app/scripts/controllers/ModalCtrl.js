(function () {
  function ModalCtrl($ubiModal) {


    ModalCtrl.open = $ubiModal.open();
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$ubiModal', ModalCtrl]);
})();
