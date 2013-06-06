/**
*** least.
*** Author: Kamil Czujowski, Sergej Müller
*** Transformed to a jQuery Plugin by Jorge Epuñan - @csslab
*** Version: 1.2
*** Made in ♥ - Copyright (c) 2013 Hamburg, Germany - All rights reserved.
*** https://twitter.com/kamilczujowski, http://wpcoder.de
**/


;(function($){ 
	$.fn.least = function(options) {
		var settings = $.extend({
			'random': true,
			'lazyload': true
		}, options);

		return this.each(function() {

			/* Open Images */
			function intipreview(object, path, caption) {
				var close = $('<figure class="close"></figure>'),
					img = $('<img src="' + path + '"/>');

				img.load(
					function() {
						object
							.html('<div class="fullCaption">' + caption + '</div>')
							.prepend(img)
							.append(close)
							.slideDown('slow');
					}
				);
						
				close.on(
					'click',
					function() {
						$('#fullPreview').slideToggle('slow');
					}
				);
			}

			$(this).find('li a').click(
				function(e) {
					e.preventDefault();
					var $$ = $(this),
						path = $$.attr('href'),
						preview = $('#fullPreview'),
						previewImg = preview.children('img'),
						caption = $$.nextAll('.projectInfo').html() || '';

					/* Same Image */
					if ( previewImg.length && path === previewImg.attr('src') ) {
						preview.slideToggle('slow');
						
						return;
					}
					/* Other Image */
					if ( previewImg.length ) {
						preview.slideUp(
							'slow',
							function() {
								intipreview(
									preview,
									path,
									caption
								);
							}
						);
					/* First Image */
					} else {
						intipreview(
							preview,
							path,
							caption
						);
					}
					/* Scroll to Top */
					$('html, body').animate(
						{ 
							scrollTop: 0
						}, 500 
					);
				}
			);

			if( settings.lazyload && $.fn.lazyload ) {
				/* Effect's */
				$("img").lazyload({
					effect: "fadeIn"
				});
			} else {
				$("img").each(
					function() {
						$(this).attr(
							'src',
							$(this).data('original')
						);
					}
				);
			}
			
			if(settings.random) {
				/* Random Images - looked up from jquery forum */
				$('#gallery').each(function(){
					var ul = $(this),
						li = ul.children('li').not(':first-child');
						
						li.sort(function() {
							var	temp = parseInt( Math.random()*8, null ),
								OddEven = temp%4,
								PosNeg = temp>2 ? 1 : -1;
								
								return ( OddEven*PosNeg );
						})
						.appendTo(ul);
				});
			}
			
		
		});
		
	};
})(jQuery);