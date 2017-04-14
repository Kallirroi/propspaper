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

	$('#imageView').on('click', function(){ 
		$('.post-image').css('display', 'block');
		$('.post-meta').css('display', 'none');
		// $('footer h3').css('display', 'none');
		$('.imageView').css('opacity', '1');
		$('.tagView').css('opacity', '0.5');

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
		$('.imageView').css('opacity', '0.5');
		$('.tagView').css('opacity', '1');
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
        var path = '//easy.myfonts.net/v2/js?sid=270903(font-family=Neue+Haas+Unica+Pro+Bold)&sid=270910(font-family=Neue+Haas+Unica+Pro+Medium)&sid=270912(font-family=Neue+Haas+Unica+Pro)&sid=270916(font-family=Neue+Haas+Unica+Pro+Ultra+Light)&key=6BGuzqFAWW',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();


    $('#indexButton').on('click', function(){
		$('html, body').animate({
        	scrollTop: $("#indexSection").offset().top
   		}, 200);
    })


  });