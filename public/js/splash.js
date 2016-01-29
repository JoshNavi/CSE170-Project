$(document).ready(function(){
  console.log("suh dude");
  var imgindex = Math.floor((Math.random() * 2) + 2);
  $('html').css('background', "../images/splash" + imgindex + ".jpg");
})
