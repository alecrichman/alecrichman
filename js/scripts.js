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

  $(function() {
    var brand = $(".navbar-brand");
    var link = $(".nav-link");
    var collapse = $(".navbar-collapse");
    var hamburger = $(".hamburger");
    brand.add(link).click(function() {
      collapse.collapse("hide");
    });
    link.add(hamburger).click(function() {
      hamburger.toggleClass("is-active");
    });
    brand.click(function() {
      hamburger.removeClass("is-active");
    })
  });

  $(window).scroll(function() {
    var brand = $(".navbar-brand");
    var masthead = $(".name");
    var hT = masthead.offset().top,
        hH = masthead.outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT < wS) && (wS + wH > hT + hH)) {
      brand.css({"opacity": "1", "visibility": "visible"}) && masthead.css("opacity", "0")
    } else {
      brand.css({"opacity": "0", "visibility": "hidden"}) && masthead.css("opacity", "1")
    }
  });

});
