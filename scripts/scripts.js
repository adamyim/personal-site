$('.nav-link, .navbar-brand, .dropdown-item').click(function() {
    var sectionTo = $(this).attr('href');
    var navHeight = $('.navbar').outerHeight();
    var winwid = $(window).width();

	if(sectionTo == "#"){
		return true; // skip trying to animate if the href doesn't point to anything
	}

	if(winwid <= 575) {
		$('html, body').animate({
	      scrollTop: $(sectionTo).offset().top-navHeight+72
	    }, 500);
		return false;
	}
	    $('html, body').animate({
	      scrollTop: $(sectionTo).offset().top+15
	    }, 500);
	    return false;

});

// TODO: options for better carousel scrolling on mobile
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  //adaptiveHeight: true,
  //groupCells: true,
  setGallerySize: true,
  fullscreen: true,
  lazyLoad: 3,
  pageDots: false
});

/* Haven't figured out how to change centering on fullscreen
flkty.on( 'fullscreenChange', function( isFullscreen ) {
	if(isFullscreen==true){
		flkty.cellAlign= 'center'
	}
	else {
		flkty.cellAlign= 'left'
	}
	return;
});
*/

/*
// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
*/