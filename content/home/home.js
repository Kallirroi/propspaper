$( function() {
    $("#draggable" ).draggable();
    $('.nav').show();
	$('.search-box').show();

	var query = window.location.href.split('s=').slice(1).toString();
	// var terms = query.split('+');
	var terms = query.slice(0, -1);
	console.log(query, terms.toString());

	if (terms.toString() === "") {
		$('#searchTerms').hide();
	} 
	else {
		$('#searchTerms').text(" for "+terms);
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
			children[i].style.transform = "translate("+ (-10*i)+"px, "+(-40*i)+"px)";
		// 	children[i].style.transform =  "skewX("+(Math.cos(i)) * 20+"deg)";
		}

	});

	$('#normalLayout').on('click', function(){ 
		var children = $('.post-container').children();
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "translate(0,0)";
		// 	children[i].style.transform =  "skewX("+(Math.cos(i)) * 20+"deg)";
		}		
	})

  } );