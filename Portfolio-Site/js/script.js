$(function () {
	"use strict";




	// home page Typed js
	const typed = new Typed('.typed-text', {
		strings: [
			"Web Designer",
			"Envato Author",
			"Freelancer",
			"Web Developer",
			"Programmer"
		],
		typeSpeed: 40,
		backSpeed: 40,
		loop: true,
	});

	// Personal Info Counter js

	$('.counter-number').counterUp({
		time: 3000
	});

     
	$('.counter-items').tilt({
        maxTilt: 20,
        scale: 1.03 ,
    })

});    

      // Pricing Part 
    
	  let toggleSwitch = document.querySelector(".toggle-switch");
    
	  toggleSwitch.addEventListener("change",() =>{
	if(toggleSwitch.checked){
		document.querySelector(".pricing-main").classList.add("active");
	}
	else{
		document.querySelector(".pricing-main").classList.remove("active");
	}
  });
      
