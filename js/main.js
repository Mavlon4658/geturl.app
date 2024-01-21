
let i = 0;
let clsSetInterval;

$(document).ready(function () {
    makeHomeAnimation();
    $('.home_slider_btn').each(function (idx, btn) {
        $(btn).click(function () {
            i = idx;
            clearInterval(clsSetInterval);
            makeHomeAnimation();
    
            clsSetInterval = setInterval(() => {
                makeHomeAnimation();
            }, 4000);
        })
    })

    clsSetInterval = setInterval(() => {
        makeHomeAnimation();
    }, 4000);
})

function makeHomeAnimation () {
    for (let i = 0; i <= 5; i++) {
        $('.text_animation .number').removeClass('active_' + i);
        $('.text_animation .title').removeClass('active_' + i);
    }
    
    // setTimeout(() => {
    $('.home_gif').removeClass('active');
    // }, 500);
    
    $('.home_gif_' + (i+1)).addClass('active');
    $('.text_animation .number').addClass('active_' + i);
    $('.text_animation .title').addClass('active_' + i);
    $('.home_slider_btn').removeClass('active');
    $($('.home_slider_btn')[i]).addClass('active');

    if (i < 5) {
        i++;
    } else {
        i = 0;
    }
}