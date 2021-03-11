$('.test, .nav-link, .navbar-brand, .new-button, .dropdown-item, .top-content').click(function() {
    var sectionTo = $(this).attr('href');
    var navHeight = $('.navbar').outerHeight();
    var winwid = $(window).width();
    
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