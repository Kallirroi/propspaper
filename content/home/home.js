var query = window.location.href.split('s=').slice(1).toString();
var terms = query.split('+');
console.log(terms)
if (terms.toString() === "") {
	$('#searchTerms').hide();
} 
else {
	$('#searchTerms').text("   for "+terms);
	$('#searchTerms').show();
}
