$( document ).ready(function() {
    $("#draggable" ).draggable();
	$('.tagView').css('opacity', '0.5');

	var query = window.location.href.split('s=').slice(1).toString();
	// var terms = query.split('+');
	var terms = query.slice(-1) === "#" ? query.slice(0, -1) : query;
	// console.log(query, terms.toString());

	if (terms.toString() === "") { //main page
		$('#searchTerms').css('opacity', 0);
	} 
	else { //search page
		$('#searchTerms').text(" "+terms);
		$('#searchTerms').css('opacity', 1);
	}

	$('.post-item').on('mouseover', function(e) {
		var hovered = e.target;
		var hoveredNumber = $(hovered).attr('alt');
		$(hovered).attr('src', $(hovered).data('hover'));
	}).mouseout(function (e) {
		var hovered = e.target;
	 	$(hovered).attr('src', $(hovered).data("src"));
	});


	$('.post-meta').on('mouseover', function(e) {	
		e.preventDefault();	
		var children = $('.post-meta ul li');
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX("+(Math.sin(e.pageY/(120 * i))) * 40+"deg)";
		}
	})
	.on('mouseout', function(e) {
		var children = $('.post-meta ul li');
		console.log(children)
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX(0)";
		}		
	})

    (function() {
        var path = '//easy.myfonts.net/v2/js?sid=270903(font-family=Neue+Haas+Unica+Pro+Bold)&sid=270910(font-family=Neue+Haas+Unica+Pro+Medium)&sid=270912(font-family=Neue+Haas+Unica+Pro)&sid=270916(font-family=Neue+Haas+Unica+Pro+Ultra+Light)&key=6BGuzqFAWW',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();


  });