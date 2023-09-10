$(function ($) {
    "use strict";

    // preloader
    var praloder = $('.praloder_main');
    $(window).on('load', function () {
        praloder.delay(800).fadeOut(1000);
    });

    //	menufix starts

    var navOffset = $('.customnav').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navOffset) {
            $('.customnav').addClass('menufixed');
        } else {
            $('.customnav').removeClass('menufixed');
        }
    });

    //	menufix ends 

    // search bar js
    var search_bar = $('.search-bar');
    var close = $('.close');
    var search_box = $('.search_box');
    search_bar.on("click", function () {
        $(".search_box").slideDown(1000)
    })

    close.on("click", function () {
        search_box.slideUp(1000)
    })

    // Nav cart 
    var cart_item = $('.nav-cart-item');
    $(".nav-cart > i, .nav-cart > span").on("click", function () {
        cart_item.slideToggle(600)
    })


    // Account part
    var account_content = $('.account-content');

    $(".account > a").on("click", function () {
        account_content.slideToggle(700)
    })

    // back to top
    var backTop = $('.backTop');
    $(window).scroll(function () {

        if ($(window).scrollTop() > 700) {
            backTop.slideDown(100);
            backTop.css({
                "display": "block"
            });
        } else(
            backTop.css({
                "display": "none"
            }))

    });

    backTop.click(function () {
        $('html, body').animate({
            scrollTop: 0,
        });
    });


    // Home page video part
    $('.fancybox').fancybox({
        arrows: false,
        keyboard: false,
        closeExisting: true
    });


    // Infinite Scrolling

    $('.demo').infiniteslide({
        'speed': 70,
        'direction': 'left'
    });

    // Road Map slick slider

    $('.road-map-slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        nextArrow: $('.arrow_left'),
        prevArrow: $('.arrow_right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
          },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
          },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                }
          },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
          }
        ]

    });

    // Expart Part
    var expart_profile = $('.expart-profile');
    if ($.fn.tilt) {
        expart_profile.tilt({
            maxTilt: 4,
            scale: 1,
        })
    }


    // Counter js
    $('.counter_number').counterUp({
        time: 3000
    });


    // chart js


    var ctx = document.getElementById('myChart');
    if (ctx) {


        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'BitCoin Chart',
                    backgroundColor: '#6A1B4D',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 9, 5, 8, 15, 10, 25],
                    defaultFontFamily: 'Latosans-serif',
            }],
            },
            options: {}
        });
    }

    var ctx = document.getElementById('myChart2');
    if (ctx) {
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'BitCoin Chart',
                    backgroundColor: '#6A1B4D',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 40],
                    defaultFontFamily: 'Latosans-serif',
          }],
            },
            options: {}
        });
    }
    if (ctx) {

        var ctx = document.getElementById('myChart3');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'BitCoin Chart',
                    backgroundColor: '#6A1B4D',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 5, 4, 39, 23, 29, 37],
                    defaultFontFamily: 'Latosans-serif',
        }],
            },
            options: {}
        });
    }




    // Bannner Part
    var banner = '.swiper-container';

    if (banner) {
        
        var swiper = new Swiper(banner, {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                // type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }



});




// if ($('selector').length > 0 ) {
// Your Code
// };