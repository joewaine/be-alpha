$('document').ready(function () {



	$('.animate_t_1, .animate_t_1_left, .animate_t_1_right, .animate_c_1, .animate_t_2, .animate_t_2_1, .animate_t_2_2, .animate_c_2, .animate_t_3, .animate_c_3, .animate_t_4, .animate_c_4, .animate_t_5_1, .animate_t_5_2, .animate_c_5').css('opacity',0);



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
