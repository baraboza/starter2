export default function toggleBox(toggle, wrap, box) {
	toggle = $(toggle);
	wrap = $(wrap);
	box = box && $(box) || wrap;

	let bodyClickHandler = function(e) {
		if (!box.is(e.target) && box.has(e.target).length === 0) {
			wrap.fadeOut(250);
			$('body').off('click', bodyClickHandler);
		}
	};

	toggle.on('click', function() {
		if (wrap.is(':visible')) {
			wrap.fadeOut();
			$('body').off('click', bodyClickHandler);
		} else {
			wrap.fadeIn(250);
			setTimeout(function() {
				$('body').on('click', bodyClickHandler);
			});
		}
	});
}