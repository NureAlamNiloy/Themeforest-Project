$(function () {
	"use strict";
    
  
	//	menufix starts

    if ($('.customnav').length > 0 ) {
        var navOffset = $('.customnav').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();
            if (scrolling > navOffset) {
                $('.customnav').addClass('menufixed');
            } else {
                $('.customnav').removeClass('menufixed');
            }
        });
    };

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


    // Home-01 Banner Slider

    $('#banner .banner-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        autoplay:true,
        nextArrow:$('.banner-icon-left'),
        prevArrow:$('.banner-icon-right'),
    });


    // Home-02 Banner Slider

    $('#banner-two .banner-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        autoplay:true,
        nextArrow:$('.banner2-icon-left'),
        prevArrow:$('.banner2-icon-right'),
    });

    // Child Range Slider

    $('.child-range').createSlide({
        progress:true,
        maxvalue: 100,
        interval: 5,
        firstvalue:'79%',

    });
   
    // Child Range Slider

    $('.campaign-range').createSlide({
        progress:true,
        maxvalue: 100,
        firstvalue:'86%',
    });


    // Home-01 page video part

    $('.home-01-video').fancybox({
        arrows: false,
        keyboard: false,
        closeExisting: true,
    });


     // Counter part

     $('.counter-number span').counterUp({
        time: 3000
    });

    //  Doner Slider

    $('.doner-slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slider_dots',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });


    //  Campaign Slider

    $('.campaign-slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });


    // Logo Slider

    $('#logo-slider .container').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });


    //Campaign-Two Slider

    $('.campaign-two-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        autoplay:true,
        nextArrow:$('.campaign-icon-left'),
        prevArrow:$('.campaign-icon-right'),
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });


    // Doner-two slider

    $('.donerTwo-info-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1, 
      dots:false,
      autoplay: false,
      arrows:false,
      asNavFor: '.doner-img-slider'
  });


   //  Doner-two slider

   $('.doner-img-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      dots:false,
      asNavFor: '.donerTwo-info-slider',
      nextArrow:$('.donertwo-icon-left'),
      prevArrow:$('.donertwo-icon-right'),
  });


    // Home-02 News Slider

    $('.update-slider').slick({
        dots: false,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1, 
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });


    //  Home 03 banner Slider

    $('#banner-three .banner-slider').slick({
        // autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade:true,
        dots: true,
        dotsClass: 'banner-dots',
    });


    
    //Campaign-three Slider

    $('.campaign-three-slider').slick({
       dots: false,
       speed: 300,
       slidesToShow: 3,
       centerMode: true,
       centerPadding: '0px',
       autoplay:true,
       nextArrow:$('.campaign-icon-left'),
       prevArrow:$('.campaign-icon-right'),
       responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
   });



    // Doners-three Slider

    $('.donerThree-slider').slick({
       dots: false,
       speed: 300,
       slidesToShow: 3,
       autoplay:true,
       nextArrow:$('.doner-three-iconL img'),
       prevArrow:$('.doner-three-iconR img'),
       responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
   });


  //  Gallery Isotop Plugin
  if ($('.isotop-gallery').length > 0 ) {
      $('.isotop-gallery').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      }
    })     
  };
  

  //  Gallery Slider

    $('.gallery-details-slider').slick({
      dots: false,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0px',
      autoplay:true,
      nextArrow:$('.gallery-icon-left'),
      prevArrow:$('.gallery-icon-right'),
  });


    // Volunteer Range Slider

    $('.volunteer-range').createSlide({
      progress:true,
      maxvalue: 100,
      interval: 5,
      firstvalue:'85%',

  });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // if ($('selector').length > 0 ) {
        
    // };

	
    


});    
