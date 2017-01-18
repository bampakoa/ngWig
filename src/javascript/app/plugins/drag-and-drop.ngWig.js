angular.module('ngWig')
  .config(['ngWigToolbarProvider', function(ngWigToolbarProvider) {
    ngWigToolbarProvider.addCustomButton('drag-and-drop', 'nw-drag-and-drop-button');
  }])
  .component('nwDragAndDropButton', {
    bindings: {
      editMode: '=',
      disabled: '=',
      content: '='
    },
    template: '',
    controller: function() {
     var el = document.querySelector('#ng-wig-editable');
      el.draggable = true;

      el.addEventListener('drop', function dragEnter(e) {
        console.log(e);
      }, false);
    }
  });

