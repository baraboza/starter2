import Inputmask from 'inputmask';

$(function() {
	Inputmask("+7 (999) 999-99-99").mask('input[type=tel]');
	
	$('.js-scroll-link').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1000);
	});
});