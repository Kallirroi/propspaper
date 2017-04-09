console.log('home');

var query = window.location.href.split('s=').slice(1).toString();
var terms = query.split('+');
$('#searchTerms').text(terms.slice(0, -1));

