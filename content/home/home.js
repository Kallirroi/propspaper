$( document ).ready(function() {
    $("#draggable" ).draggable();
    $('.nav').show();
	$('.search-box').show();

	var query = window.location.href.split('s=').slice(1).toString();
	// var terms = query.split('+');
	var terms = query.slice(-1) === "#" ? query.slice(0, -1) : query;
	console.log(query, terms.toString());
	var visiblePostsID = $('.post-image').children().find('img').map(function(index,dom){return dom.id!=="" ? dom.id : null;});

	if (terms.toString() === "") { //no search
		$('#searchTerms').hide();
		$('.fragment-wrap').hide();
		for (var i = visiblePostsID.length - 1; i >= 0; i--) {
			$('#'+visiblePostsID[i]).show();
		}
	} 
	else {
		$('#searchTerms').text(" for "+terms);
		$('#searchTerms').show();
		$('.fragment-wrap').show();
		for (var i = visiblePostsID.length - 1; i >= 0; i--) {
			$('#'+visiblePostsID[i]).hide();
		}
	}

	$('.post-item').on('mouseover', function(e) {
		var hovered = e.target;
		var hoveredNumber = $(hovered).attr('alt');
		$(hovered).attr('src', $(hovered).data('hover'));
	}).mouseout(function (e) {
		var hovered = e.target;
	 	$(hovered).attr('src', $(hovered).data("src"));
	});

	$('#imageView').on('click', function(){ 
		$('.post-image').css('display', 'block');
		$('.post-meta').css('display', 'none');
		// $('footer h3').css('display', 'none');
		$('.imageView').css('font-weight', '600');
		$('.tagView').css('font-weight', '400');

		var children = $('.post-container').children();
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "translate(0,0) skewX(0)";
		}	
		document.removeEventListener('mousemove', skewTags, false);
	})

	$('#tagView').on('click', function(e){
		document.addEventListener('mousemove', skewTags, false);
		$('.post-image').css('display', 'none');
		$('.post-meta').css('display', 'inline-block');
		$('footer h3').css('display', 'block');
		$('.imageView').css('font-weight', '400');
		$('.tagView').css('font-weight', '600');
	});

	function skewTags(e) {
		var children = $('.post-container').children();
		for (var i = children.length - 1; i >= 0; i--) {
			if (i > 7) {
				children[i].style.transform = "translate("+ (-10 * i)+"px, "+(-20*i)+"px) skewX("+(Math.sin(e.pageY/(100 * i))) * 20+"deg)";
			}
			else {
				children[i].style.transform = "translate("+ (0)+"px, "+(0)+"px) skewX("+(Math.sin(-e.pageX/(100 * (i+1)))) * 20 +"deg)";
			}
		}
	}

	(function() {
		imagesLoaded(document.querySelectorAll('.fragment-wrap'), { background: true }, function() {
			document.body.classList.remove('loading');

			for (var i = visiblePostsID.length - 1; i >= 0; i--) {
				new FragmentsFx(document.getElementById(visiblePostsID[i]), {
					fragments: 10,
					boundaries: {x1: 50, x2: 150, y1: 0, y2: 0},
					randomIntervals: {
						top: {min: 0,max: 40},
						left: {min: 0,max: 90},
						dimension: {
							width: {min: 10,max: 150, fixedHeight: 0.5},
							height: {min: 5,max: 110, fixedWidth: 5}
						}
					},
					parallax: true,
					randomParallax: {min: 10, max: 300}
				});
			}
		});
	})();

  });