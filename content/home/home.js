$( function() {
    $("#draggable" ).draggable();


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
		$(hovered).attr('src', $(hovered).data('hover'));
	}).mouseout(function (e) {
		var hovered = e.target;
	 	$(hovered).attr('src', $(hovered).data("src"));
	});

	$('#randomLayout').on('click', function(){
		var children = $('.post-container').children();
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform =  "skewX("+(Math.cos(i)) * 20+"deg)";
			// children[i].style.width = "calc(99.99% * 1/10 - 50px)";
		}

	})

  } );