$(function () {
    "use strict";
    

    
    

    // mobile menu

    const openNavBtn = document.querySelector(".open-nav");
    const closeNavBtn = document.querySelector(".close-nav");
    if (openNavBtn && closeNavBtn) {
        openNavBtn.addEventListener("click", toggleNav);
        closeNavBtn.addEventListener("click", toggleNav);

        function toggleNav() {
            document.querySelector(".nav").classList.toggle("open");
        }
    }





    // Testimonial Slider

    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slider_dots',
    });



    // Personal Info Counter js

    $('.counter-number').counterUp({
        time: 3000
    });


    $('.counter-items').tilt({
        maxTilt: 20,
        scale: 1.03,
    });

    // Pricing Part 

    var toggleSwitch = document.querySelector(".toggle-switch");

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", () => {
            if (toggleSwitch.checked) {
                document.querySelector(".pricing-main").classList.add("active");
            } else {
                document.querySelector(".pricing-main").classList.remove("active");
            }
        });
    }


    // portfolio Paga Start

    $('.portfolio-nav button').click(function () {
        $('.portfolio-nav button').removeClass('active');
        $(this).addClass('active');
    });

    // filterizr
    if (filterizd) {
     var filterizd = $('.filter-container').filterizr({});   
    }
    

    // portfolio Paga End





});
