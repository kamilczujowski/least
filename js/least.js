/**
*** least.
*** Author: Kamil Czujowski, Sergej Müller
*** Version: 1.0
*** Made in ♥ - Copyright (c) 2013 Hamburg, Germany - All rights reserved.
*** https://github.com/kamilczujowski, http://wpcoder.de
**/


$(function() {
	/* Effect's */
	$("img").lazyload(
		{
			effect: "fadeIn"
		}
	);


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

	$('#gallery li a').click(
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
});




