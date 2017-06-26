/*** Go top button **/


$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        }, 500);
    });
    $(window).load(function() {
		$('#gotop').hide();
    })

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});


/*** page header ***/
$(document).scroll(function() {
  downScroll();
});

function downScroll() {
  var h = window.scrollY;
  if (h > 10) {
    $('.header').addClass('small');
  } else if (h < 10) {
    $('.header').removeClass('small');
  }
}

/*** sticky header for notebooks ***/
$(document).scroll(function() {
  navbarScroll();
});

function navbarScroll() {
  var y = window.scrollY;
  if (y > 10) {
    $('.menu').addClass('fix-top');
  } else if (y < 10) {
    $('.menu').removeClass('fix-top');
  }
}
