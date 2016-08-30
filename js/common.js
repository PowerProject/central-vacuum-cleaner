$(document).ready(function(){
    var settings = function(){
            $('.section-1-main').css({'height': $(window).height() + 'px'});
        };
    settings();

/*
    var href = 'desc, advant, price, test';

    var arr = href.split(', ');

    for (var i = 0; i < arr.length; i++) {
        var section;
        section[i]=$('#' + arr[i]).offset().top;
        alert(section[i]);
    }
*/

    function scrollHref(){
        var section2 = $('#desc').offset().top,
            section3 = $('#advant').offset().top,
            section4 = $('#price').offset().top,
            section5 = $('#test').offset().top,
            section6 = $('#contact').offset().top,
            sectionFind = $(window).scrollTop();
        if($(window).scrollTop()  < (section2 - 10)){
            $('li a').removeClass('active');
            $('li a:nth(0)').addClass('active');
        }
        else if ($(window).scrollTop() < section3){
            $('li a').removeClass('active');
            $('li a:nth(1)').addClass('active');
        }
        else if ($(window).scrollTop() < section4){
            $('li a').removeClass('active');
            $('li a:nth(2)').addClass('active');
        }
        else if ($(window).scrollTop() < section5){
            $('li a').removeClass('active');
            $('li a:nth(3)').addClass('active');
        }
        else if ($(window).scrollTop()< section6){
            $('li a').removeClass('active');
            $('li a:nth(4)').addClass('active');
        }
        if($(window).scrollTop()+$(window).height()>=$(document).height()){
            $('li a').removeClass('active');
            $('li a:nth(5)').addClass('active');
        }
    };

    $(window).resize(function() {
        settings();
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height()) {
            $('header .navbar').css('background', 'rgba(255,255,255,1');
        }
        else {
            $('header .navbar').css('background', 'rgba(255,255,255,0.7');
        }
        scrollHref();
    /* Scroll Href
        var section2 = $('#desc').offset().top,
            section3 = $('#advant').offset().top,
            section4 = $('#price').offset().top,
            section5 = $('#test').offset().top,
            section6 = $('#contact').offset().top,
            sectionFind = $(window).scrollTop();
        if($(window).scrollTop()  < section2){
            $('li a').removeClass('active');
            $('li a:nth(0)').addClass('active');
        }
        else if ($(window).scrollTop() < section3){
            $('li a').removeClass('active');
            $('li a:nth(1)').addClass('active');
        }
        else if ($(window).scrollTop() < section4){
            $('li a').removeClass('active');
            $('li a:nth(2)').addClass('active');
        }
        else if ($(window).scrollTop() < section5){
            $('li a').removeClass('active');
            $('li a:nth(3)').addClass('active');
        }
        else if ($(window).scrollTop()< section6){
            $('li a').removeClass('active');
            $('li a:nth(4)').addClass('active');
        }
        if($(window).scrollTop()+$(window).height()>=$(document).height()){
            $('li a').removeClass('active');
            $('li a:nth(5)').addClass('active');
        }*/
    });

    /* Anchor scroll*/

    $('nav a').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false; // выключаем стандартное действие

    });

});
