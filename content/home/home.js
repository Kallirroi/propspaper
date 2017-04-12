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

	$('#tagView').on('click', function(){
		var children = $('.post-container').children();
		// for (var i = children.length - 1; i >= 0; i--) {
		// 	children[i].style.transform = "translate("+ (-10*i)+"px, "+(-40*i)+"px)";
		// // 	children[i].style.transform =  "skewX("+(Math.cos(i)) * 20+"deg)";
		// }
		$('.post-image').css('display', 'none');
		$('.post-meta').css('display', 'inline-block');
		$('footer h3').css('display', 'block');
		$('.imageView').css('font-weight', '400');
		$('.tagView').css('font-weight', '500');

	});

	$('#imageView').on('click', function(){ 
		$('.post-image').css('display', 'block');
		$('.post-meta').css('display', 'none');
		// $('footer h3').css('display', 'none');
		$('.imageView').css('font-weight', '500');
		$('.tagView').css('font-weight', '400');
		// var children = $('.post-container').children();
		// for (var i = children.length - 1; i >= 0; i--) {
		// 	children[i].style.transform = "translate(0,0)";
		// // 	children[i].style.transform =  "skewX("+(Math.cos(i)) * 20+"deg)";
		// }		
	})

  } );