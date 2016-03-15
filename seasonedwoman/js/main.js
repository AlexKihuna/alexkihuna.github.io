/**
 * Created by kakashi on 3/14/2016.
 */
//jQuery to collapse the navbar on scroll
$window = $(window);
$window.scroll(function() {
    var navbar = $(".main-navbar");
    if ($('body').scrollTop() > 500) {
        navbar.addClass("navbar-fixed-top");
    } else {
        navbar.removeClass("navbar-fixed-top");
    }
});