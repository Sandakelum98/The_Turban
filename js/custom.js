(function ($) {
	"use strict";
	$(document).ready(function () {
		$('.slider').bxSlider({
			auto: true,
			mode: 'fade',
			speed: 1000,
			pause: 5000,
			easing: 'ease-in-out',
			autoControls: false,
			controls: false,
			pager: false,
		});
		$('.testimonial-slider-inner').bxSlider({
			auto: true,
			mode: 'fade',
			speed: 1000,
			pause: 5000,
			easing: 'ease-in-out',
			autoControls: false,
			controls: true,
			pager: false,
			nextText: '',
			prevText:'',
		});
		$('.logo-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			controls: false,
			animateOut: 'fadeOut',
			responsive: {
				0: {
					items: 1
				},
				415: {
					items: 1
				},
				991: {
					items: 1
				},
				1200: {
					items: 1
				}

			}
		});
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			controls: false,
			responsive: {
				0: {
					items: 1
				},
				415: {
					items: 1
				},
				991: {
					items: 1
				},
				1200: {
					items: 1
				}

			}
		});
		$(".mobile-menu-toggle").on("click", function () {
			$('.menu-area .menu').slideToggle();
			$('body').toggleClass('menu-has-opened');
		});

		/*$('.gallery-image').viewbox({
			setTitle: true,
			margin: 5,
			resizeDuration: 300,
			openDuration: 200,
			closeDuration: 200,
			closeButton: true,
			navButtons: true,
			closeOnSideClick: true,
			nextOnContentClick: true
		});*/
		$('.videoPopup').flashy();


	});
})(jQuery);
