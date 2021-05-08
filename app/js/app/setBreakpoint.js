let setBreakpoint = function() {
	if (window.matchMedia('(min-width: 1200px)').matches) window.breakpoint = 4;
	else if (window.matchMedia('(min-width: 992px)').matches) window.breakpoint = 3;
	else if (window.matchMedia('(min-width: 768px)').matches) window.breakpoint = 2;
	else if (window.matchMedia('(min-width: 576px)').matches) window.breakpoint = 1;
	else window.breakpoint = 0;
}

setBreakpoint();
$(window).on('resize', setBreakpoint);