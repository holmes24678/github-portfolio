// Smooth scrolling
$(document).ready(function() {
  $("a.nav-link").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top - 70
          }, 800);
      }
  });
});
