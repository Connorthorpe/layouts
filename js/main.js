$(document).ready(function() {
    $(".arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
});