$(document).ready(function() {
      // HOME PAGE SPECIFIC ITEMS
    if ( $('body').attr('data-page') === 'home' ) {
      // Set up PACE options
      Pace.on('done', function(){
          $('.cover').fadeOut(2000);
      });
    }
    Pace.options = {
      ajax: false
    }
    $('#fullpage').fullpage({
        responsive: 984,
        scrollingSpeed: 600,
        menu: '.myMenu',
        anchors: ['home', 'about', 'work', 'resume'],

    });
});

Pace.options = {
  ajax: false
}
