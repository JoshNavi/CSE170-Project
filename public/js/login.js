$(document).ready(function() {
	initializePage();

	//listeners
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  var input = $('.form').find('input, textarea');
  var label = input.prev('label');

  var usr = $('#usr');
  var pw = $('#pw');

  if( !(usr.val() === '') ) {
    label.addClass('active');
  }

  if( !(pw.val() === '') ) {
    label.addClass('active');
  }
}

$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

      console.log(label);

  if (e.type === 'keyup') {
		if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
  } else if (e.type === 'blur') {
  	if( $this.val() === '' ) {
  		label.removeClass('active highlight');
		} else {
	    label.removeClass('highlight');
		}
  } else if (e.type === 'focus') {

    if( $this.val() === '' ) {
  		label.removeClass('highlight');
		}
    else if( $this.val() !== '' ) {
	    label.addClass('highlight');
		}
  }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});
