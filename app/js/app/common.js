import toggleBox from './modules/toggleBox';

$(function() {
	$('.js-scroll-link').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1000);
	});
});