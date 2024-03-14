$(function() {
    function cambiarNavbarDependiendoDeScroll() {
        var navbar = $('body');
        if ($(window).scrollTop() > 100) {
            navbar.addClass('scrolling');
        } else {
            navbar.removeClass('scrolling');
        }
    }
    
    $(window).scroll(function (event) {
        cambiarNavbarDependiendoDeScroll();
    });
    
    cambiarNavbarDependiendoDeScroll();

    $('.sidebar__dismiss, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
    
    $('.js-sidebar__collapse').on('click', function () {
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
    });
});