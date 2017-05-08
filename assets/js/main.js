

$(document).ready(function(){


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

 







