$('document').ready(function () {

	var s = $('.section');
	var nav = $('ul li a');
	s.waypoint({
		handler: function (direction) {
			var active = $(this);
			if (direction == 'up')
				active = active.prev();
			var active_link = $('ul li a[href="#' + active.attr('id') + '"]');



			if (active.attr('id') == 1) {

				$('.share-top-right').addClass('stroke-white');
				$('.left-bar__svg #white').addClass('fadedIn');
				$('#left-bar, #right-nav').removeClass('orange');

			} else if (active.attr('id') == 2) {
			} else if (active.attr('id') == 3) {
			} else if (active.attr('id') == 4) {
			} else if (active.attr('id') == 5) {
				$('#left-bar, #right-nav').removeClass('fadedOut2');


			} else if (active.attr('id') == 6) {
				$('#left-bar, #right-nav').addClass('fadedOut2');
				console.log('attr id is now 6')
			} else {
				$('#left-bar, #right-nav').addClass('orange');
				$('.share-top-right').removeClass('stroke-white');
				$('.left-bar__svg #white').removeClass('fadedIn');
			}

			nav.parent().removeClass('active');
			active_link.parent().addClass('active');
		},
		offset: '70%'
	});

});
(function ($) {
	$('li a').click(function () {
		console.log($(this).attr('id'));
		//$('body').scrollTop($(this).attr('id'));
	});
});