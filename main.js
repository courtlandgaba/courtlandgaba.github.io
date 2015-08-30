$(document).ready(function() {
      // HOME PAGE SPECIFIC ITEMS
    if ( $('body').attr('data-page') === 'home' ) {
      // Set up PACE options
      Pace.on('done', function(){
          $('.cover').fadeOut(2000);
      });
    }
    paceOptions = {
      ajax: false,
      restartOnRequestAfter: falses
    }
    $('#fullpage').fullpage({
        responsive: 984,
        scrollingSpeed: 600,
        menu: '.myMenu',
        anchors: ['home', 'about', 'work', 'resume'],

    });
});

paceOptions = {
  ajax: false,
  restartOnRequestAfter: falses
}
