document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('#btn');
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          var url = this.getAttribute('data-url');
          window.location.href = url;
      });
  });
});
