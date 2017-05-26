(function (){
  function myEnter ($document) {

    return {
          link: function (scope, elements, attrs) {
             elements.bind('keydown keypress', function (event) {
                 if (event.which === 13) {
                     scope.$apply(function () {
                         scope.$eval(attrs.myEnter);
                     });
                     event.preventDefault();
                 }
             });
          }
       };
  }

  angular
  .module('blocChat')
  .directive('myEnter', ['$document', myEnter]);
})();
