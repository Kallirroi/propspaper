$('img.lazy-loaded')
	.wrap('<span style="display:inline-block"></span>')
	.css('display', 'block')
	.parent()
	.zoom(function(e){
		url: e.target.src
	});


screensaver.init();
screensaver.initMouseTracking();
// screensaver.start();
// screensaver.stopMouseTracking();
