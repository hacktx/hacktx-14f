// All things related to being responsiveness / resizing

$(document).ready(function() {
    
    var resize = function() {
        var cw = $('.video').width();
        $('.video').css({'height': cw * 3/4 + 'px'});
        
        // Fit the text to the appropriate size
        $(".section-title-text").fitText();
        
        if ($(window).width() < 860) {
            $('.with-us').text(' BIG');
            $('.hackbig').fitText(.7)
        } else {
            $('.with-us').text(' BIG WITH US');
            $('.hackbig').css("font-size", "6.2em");
        }
        
        var windowH = $(window).height();
        $('.jumbotron').css({'height':($(window).height())+'px'});
    };
    $(window).resize(resize);
        
    resize();
    
    
    $(function(){
        $(".typed").typed({
            strings: ["HACK", "WIN", "PLAY"],
            typeSpeed: 250,
            backDelay: 3000,
            startDelay: 300
        });
    });
});