'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	//listeners
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.carousel').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		variableWidth: true,
		autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
}
