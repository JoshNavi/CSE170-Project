'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
}

$(document).ready(function(){
  console.log("suh dude");
  var imgindex = Math.floor((Math.random() * 2) + 2);
  $('html').css('background', "../images/splash" + imgindex + ".jpg");
})
