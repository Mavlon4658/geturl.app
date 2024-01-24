
let i = 0;
let i2 = 0
let clsSetInterval;
let clsSetInterval2;

$(document).ready(function () {
    $('header .bars').click(function () {
        $('.mobile_menu').removeClass('end_active');
        $('.mobile_menu').addClass('active');
    })

    $('.mobile_menu__close').click(function () {
        $('.mobile_menu').removeClass('active');
        $('.mobile_menu').addClass('end_active');
    })
    
    $('.mobile_menu__bg').click(function () {
        $('.mobile_menu').removeClass('active');
        $('.mobile_menu').addClass('end_active');
    })

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

    $('.about .btn_group button').each(function (idx, btn) {
        $(btn).click(function () {
            i2 = idx;
            clearInterval(clsSetInterval2);
            makeAboutAnimation();

            clsSetInterval2 = setInterval(() => {
                makeAboutAnimation();
            }, 5000);
        })
    })

    makeAboutAnimation();
    clsSetInterval2 = setInterval(() => {
        i2++;
        makeAboutAnimation();
    }, 5000);
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

function makeAboutAnimation () {
    if (i2 == 6) {
        i2 = 0;
    }

    $('.about_gif').each(function (idx, el) {
        if (el.classList.contains('active')) {
            $(el).removeClass('active');
            $(el).addClass('end_active');
            setTimeout(() => {
                $(el).removeClass('end_active');
            }, 500);
        }
    })
    $($('.about_gif')[i2]).addClass('active')

    $('.about .btn_group button').each(function (idx, el) {
        if (el.classList.contains('active')) {
            $(el).removeClass('active');
            $(el).addClass('end_active');
            setTimeout(() => {
                $(el).removeClass('end_active');
            }, 400);
        }
    })
    $($('.about .btn_group button')[i2]).addClass('active');

    $('.about .border_bottom').removeClass('active');
    setTimeout(() => {
        $('.about .border_bottom').addClass('active');
    }, 500);
}