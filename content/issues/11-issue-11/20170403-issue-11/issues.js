$('img')
	.wrap('<span style="display:inline-block"></span>')
	.css('display', 'block')
	.parent()
	.zoom(function(e){
		url: e.target.src
});



mos.Screensaver.init();
mos.Screensaver.start();