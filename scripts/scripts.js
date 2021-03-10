$('.test, .nav-link, .navbar-brand, .new-button, .dropdown-item, .top-content').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 500);
});