function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var $nav = $('.top-nav.scrolling'),
    $heroHeader = $('.hero-header');

$(document).scroll(function(){
    var _this = this;
    debounce(function(){
        if($(_this).scrollTop() <= 67){
            $nav.addClass('visuallyhidden');
        } else {
            $nav.removeClass('visuallyhidden');
        }

    }, 250)();
})

if($('.nav').hasClass('not')){
    $(document).scroll(function(){
        var _this = this;
        debounce(function(){
            if($(_this).scrollTop() === 0){
                $nav.addClass('invisible');
            } else {
                $nav.removeClass('invisible');
            }

        }, 250)();
    })
} else {
    $('.nav .btn').css('display', 'none');
}
