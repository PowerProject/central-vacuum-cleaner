$(document).ready(function(){
    var settings = function(){
            $('.section-1-main').css({'height': $(window).height() + 'px'});
        };
    settings();


    $(window).resize(function() {
        settings();
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height()) {
            $('.section-1-main .video-bg__video').css('position', 'absolute');
            $('header .navbar').css('background', 'rgba(255,255,255,1');
        }
        else {
            $('.section-1-main .video-bg__video').css('position', 'fixed');
            $('header .navbar').css('background', 'rgba(255,255,255,0.7');
        }

    });


});
