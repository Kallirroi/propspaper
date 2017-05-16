var mos = mos || {};

mos.Screensaver = (function($) {
	"use strict";

	var 
		_durationBeforeSlide = 0, //3000,
		_durationBeforeActivateSS = 0, //60000,
		_durationFade = 1000,
		_timeoutSlide = false,
		_timeoutTracking = false;
	
	function start() {
		console.log('Screensaver.start()');

		$('body').addClass('overflow');

		var $cont = $('#screensaver');
		
		//$cont.addClass('active');
		$cont
			.addClass('starting')
			.fadeIn(0);

		$cont
				.find('.item')
				.first()
				.addClass('active');

		setTimeout(function() {

			$cont
				.addClass('active')
				.removeClass('starting');
		}, 1000);

		/*
		$cont.fadeIn(_durationFade, function() {

			$cont
				.find('.item')
				.first()
				.addClass('active');

			$('body').addClass('overflow');
		});
		*/

		stopMouseTracking();

		// Slide timer

		clearTimeout(_timeoutSlide);
		_timeoutSlide = setTimeout(gotoNext, _durationBeforeSlide);
	}

	function stop() {
		console.log('  stop()');

		$('body').removeClass('overflow');
	
		var $ss = $('#screensaver');

		$ss.fadeOut(_durationFade, function() {

			$ss
				.removeClass('active')
				.find('.item.active')
				.removeClass('active');

			$('body').removeClass('overflow');
		});		

		clearTimeout(_timeoutSlide);

		initMouseTracking();
	}

	function mouseMoving() {
		console.log('  mouseMoving()');

		clearTimeout(_timeoutTracking);
		
		_timeoutTracking = setTimeout(function() {

			start();

		}, _durationBeforeActivateSS);
	}

	function initMouseTracking() {
		console.log('  initMouseTracking()');

		var $cont = $('#screensaver');

		if($cont.length > 0) {

			$('body').mousemove(throttle( mouseMoving() ,1000));

			$(window).scroll(throttle( mouseMoving(), 600));

			mouseMoving();
		}		
	}

	function stopMouseTracking() {
		console.log('  stopMouseTracking()');

		$('body').unbind('mousemove');
		clearTimeout(_timeoutTracking);
	}

	function gotoNext() {
		console.log('  gotoNext()');

		var 
			$cont = $('#screensaver'),
			$active = $cont.find('.item.active'),
			$next = $active.next();

		$active.removeClass('active');

		if($next.length > 0) {

			$next.addClass('active');

		} else {
			
			$cont.find('.item').first().addClass('active');
		}

		_timeoutSlide = setTimeout(gotoNext, _durationBeforeSlide);
	}

	function throttle (callback, limit) {

	  var wait = false;
	  return function () {
	    if (!wait) {

	      callback.apply(null, arguments);
	      wait = true;
	      setTimeout(function () {
	        wait = false;
	      }, limit);
	    }
	  }
	}


	return {
		init: function() {

			var $ss = $('#screensaver');

			//

			_durationBeforeSlide = $ss.data('duration-scroll');
			_durationBeforeActivateSS = $ss.data('duration-start');

			//

			$ss.click(function() {
				console.log('Screensaver.click()');

				stop();
			});

			//

			$(document).keydown(function(e) {

				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
				// console.log(key);

				if(key === 27) { //esc
					stop();
				}
			});
		},
		initMouseTracking: initMouseTracking,
		stopMouseTracking: stopMouseTracking,
		start: start
	};
})(jQuery);