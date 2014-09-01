// All things related to being responsiveness / resizing

$(document).ready(function() {
    
    var resize = function() {
        var cw = $('.video').width();
        $('.video').css({'height': cw * 3/4 + 'px'});
        
        // Fit the text to the appropriate size
        $(".section-title-text").fitText(1.0, { minFontSize: '25px' });
        
        if ($(window).width() < 970) {
            $('.with-us').text(' BIG');
            $('.hackbig').fitText(.7, { maxFontSize: '99px' });
            
        } else {
            $('.with-us').text(' BIG WITH US');
        }
        
        var windowWidth = $(window).width() * .8;
        var logoDivWidth = $('.logo-div').width();
        var toSet = windowWidth < logoDivWidth ? windowWidth : logoDivWidth;
        $('.logo').css({'width': toSet+'px'});
        
        var windowH = $(window).height();
        $('.jumbotron').css({'height':($(window).height())+'px'});
    };
    $(window).resize(resize);
        
    resize();
    
    
    $(function(){
        $(".typed").typed({
            strings: ["DREAM", "PLAY", "WIN", "CREATE", "HACK"],
            typeSpeed: 250,
            backDelay: 3000,
            startDelay: 300
        });
    });
});
