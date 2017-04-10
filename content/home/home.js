var query = window.location.href.split('s=').slice(1).toString();
// var terms = query.split('+');
var terms = query;
console.log(terms);

if (terms.toString() === "") {
	$('#searchTerms').hide();
} 
else {
	$('#searchTerms').text("search for "+terms);
	$('#searchTerms').show();
}


$('.post-item').on('mouseover', function(e) {
	var hovered = e.target;
	var hoveredNumber = $(hovered).attr('alt');
	console.log($(hovered).attr('data-hover'))
	$(hovered).attr('src', $(hovered).data('hover'));
}).mouseout(function (e) {
	var hovered = e.target;
 	$(hovered).attr('src', $(hovered).data("src"));
});