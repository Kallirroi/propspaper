

$(document).ready(function(){


	$("#draggable" ).draggable();

    //-------------------------PROPS FOR...... -------------------------
	var query = window.location.href.split('tag:').slice(1).toString();
	console.log(query)

	//have to replace %20 by a '   '
	var terms = query.replace(/%20/g, ' ');

	if (terms.toString() === "") { //main page
		$('#searchTerms').css('opacity', 0);
	} 
	else { //search page
		$('#searchTerms').text(" for  "+terms);
		$('#searchTerms').css('opacity', 1);
	}


	//-------------------------show back/front image-------------------------
	$('.post-item').on('mouseover', function(e) {
		var hovered = e.target;
		var hoveredNumber = $(hovered).attr('alt');
		$(hovered).attr('src', $(hovered).data('hover'));
	}).mouseout(function (e) {
		var hovered = e.target;
	 	$(hovered).attr('src', $(hovered).data("src"));
	});

	//-------------------------Skew TAGS-------------------------
	$('.post-meta').on('mouseover', function(e) {	
		e.preventDefault();	
		var children = $('.post-meta ul li');
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX("+(Math.sin(e.pageY/(120 * (i+1)))) * 30+"deg)";
		}
	})
	.on('mouseout', function(e) {
		var children = $('.post-meta ul li');
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX(0)";
		}		
	});


	//-------------------------Load Fonts-------------------------
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







	/*-------------------------------------------------*/
	/* =  search
	/*-------------------------------------------------*/
  
    $(".nav-alt-search").first().expandSearch();

    	
    /*-------------------------------------------------*/
	/* =  info modal popup
	/*-------------------------------------------------*/
 	
	$('#trigger-info-modal').on( 'click', function() {
		$('section.info-modal').show();
	});

	$('a.info-modal-close').on( 'click', function(){
		$('section.info-modal').hide();
	});

	/*-------------------------------------------------*/
	/* =  isotope - post items
	/*-------------------------------------------------*/

	$(window).on('load',function(){

		var $container = $('.post-container');
		
		// initialize isotope
		$container.isotope({

		  itemSelector : '.post-item',

		  masonry: {
		    columnWidth: '.grid-sizer'
		  }
		  // options...
		});

	});


	/*-------------------------------------------------*/
	/* =  socials share
	/*-------------------------------------------------*/

	var url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
	  var title = document.getElementsByTagName("title")[0].innerHTML;
	  var description = document.querySelector("meta[name=\'description\']").getAttribute('content');

	  // Need and attribute text
	  var twitter = document.querySelectorAll('.share--twitter');
	  Array.prototype.forEach.call(twitter, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      var text = this.getAttribute('data-message') +  " " + title;
	      window.open( "http://twitter.com/share?url=" +
	        encodeURIComponent(url) + "&text=" +
	        encodeURIComponent(text) + "&count=none/",
	        "tweet", "height=300,width=550,resizable=1"
	      );
	    });
	  });

	  var facebook = document.querySelectorAll('.share--facebook');
	  Array.prototype.forEach.call(facebook, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      window.open( "http://www.facebook.com/sharer.php?u=" +
	        encodeURIComponent(url) + "&t=" +
	        encodeURIComponent(title),
	        "facebook", "height=300,width=550,resizable=1"
	      );
	    });
	  });

	  var googleplus = document.querySelectorAll('.share--googleplus');
	  Array.prototype.forEach.call(googleplus, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      window.open( "https://plus.google.com/share?url=" +
	        encodeURIComponent(url),
	        "google +", "height=300,width=550,resizable=1"
	      );
	    });
	  });


	  // Need and attibute data-image-url
	  var pinterest = document.querySelectorAll('.share--pinterest');
	  Array.prototype.forEach.call(pinterest, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      var imageUrl = this.getAttribute('data-image-url');
	      window.open( "https://pinterest.com/pin/create/button/?url=" +
	        encodeURIComponent(url) + '&media=' +
	        encodeURIComponent(imageUrl) + '&description=' +
	        encodeURIComponent(description),
	        "pinterest", "height=300,width=550,resizable=1"
	      );
	    });
	  });

});

 







