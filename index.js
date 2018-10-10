$(document).ready(function(){
	// Smooth Scrolling - Courtesy of css-tricks
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $(window).scroll(() => {
    let scroll = $(window).scrollTop();

    if(scroll > 100) {
      $("#header").addClass("nav-header-scrolled");
      $("#header").removeClass("nav-header");

      $("#nav-bar > a").addClass("nav-link-scrolled");
      $("#nav-bar > a").removeClass("nav-link");
    } else {
      $("#header").addClass("nav-header");
      $("#header").removeClass("nav-header-scrolled");

      $("#nav-bar > a").addClass("nav-link");
      $("#nav-bar > a").removeClass("nav-link-scrolled");
    }
  })

  $(".modal").click(() => {
    $(".modal").hide();
    let vidUrl = $("#video").prop("src").replace("?autoplay=1", "");
    $("#video").prop("src", vidUrl);
  });

  $("#video-play").click(() => {
    $(".modal").show();
    let vidUrl = $("#video").prop("src") + "?autoplay=1";
    $("#video").prop("src", vidUrl);
  });
});