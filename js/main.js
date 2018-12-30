document.body.className += ' fade-out';
$(function () {
    $('body').removeClass('fade-out');
});


jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        var hh = document.body.clientHeight;
        console.log(ww);
        if (ww < 672) {
            $('.s-sidebar__nav-link').removeClass('fa-lg');
            $('.s-sidebar__nav-link').addClass('fa-xs');
        } else if (ww >= 672) {
            $('.s-sidebar__nav-link').removeClass('fa-xs');
            $('.s-sidebar__nav-link').addClass('fa-lg');
        };


    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});