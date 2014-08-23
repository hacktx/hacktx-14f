// All things related to being responsiveness / resizing

$(document).ready(function() {
    
    var resize = function() {
        console.log('resizing');
        var cw = $('.video').width();
        $('.video').css({'height': cw * 3/4 + 'px'});
        
        // Fit the text to the appropriate size
        $(".section-title-text").fitText();
    };
    $(window).resize(resize);
    
    resize();
});