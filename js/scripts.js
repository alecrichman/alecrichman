$(document).ready(function () {

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  $(window).scroll(function() {
    var navbarName = $(".navbar-brand");
    var mastheadName = $(".name");
    var hT = mastheadName.offset().top,
        hH = mastheadName.outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT < wS) && (wS + wH > hT + hH)){
      navbarName.css({"opacity": "1", "visibility": "visible"}) && mastheadName.css("opacity", "0")
    } else {
      navbarName.css({"opacity": "0", "visibility": "hidden"}) && mastheadName.css("opacity", "1")
    }
  });

  $(".navbar-nav>li>a, .navbar-brand").on("click", function(){
    $(".navbar-collapse").collapse("hide");
  });

  $(function() {
    var hamburger = $(".hamburger");
    hamburger.on("click", function(e) {
      hamburger.toggleClass("is-active");
    });
  });

});
