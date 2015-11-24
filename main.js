$(document).ready(function() {
      // HOME PAGE SPECIFIC ITEMS
    if ( $('body').attr('data-page') === 'home' ) {
      // Set up PACE options
      Pace.on('done', function(){
          $('.cover').fadeOut(2000);
      });
    };


    $('#fullpage').fullpage({
        responsive: 984,
        menu: '.myMenu',
        anchors: ['home', 'about', 'work', 'resume'],
        autoScrolling: false,
        paddingTop: '5em',
        paddingBottom: '5em',
        fitToSection: false,
        verticalCentered: true,
    });
});
