$('img')
	.wrap('<span style="display:inline-block"></span>')
	.css('display', 'block')
	.parent()
	.zoom(function(e){
		url: e.target.src
});


//call screensaver

screensaver.init();
screensaver.initMouseTracking();
// screensaver.start();
// screensaver.stopMouseTracking();
