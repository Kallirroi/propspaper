// $('.nav-alt-search').hide();
// $('.footer').hide();
// $('#tagView').hide();
// $('#imageView').hide();
// $('#indexButton').hide();
// $('#trigger-info-modal').hide();

$('img')
	.wrap('<span style="display:inline-block"></span>')
	.css('display', 'block')
	.parent()
	.zoom(function(e){
		url: e.target.src
});