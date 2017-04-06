$(document).ready(function(){
	/*-------------------------------------------------*/
	/* =  owl-carousel (Categories Slider)
	/*-------------------------------------------------*/

	$(window).on('load',function(){

		var $owl = $('.owl-carousel');
		$owl.owlCarousel({
		    lazyLoad:true,
		    loop:true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:2,
		            dots: false,
		            loop:true
		        },
		        768:{
		            items:3,
		            dots: false,
		            loop:true
		        },
		        1024:{
		            items:4,
		            dots: false,
		            loop:true
		        },
		        1200:{
		            items:6,
		            dots: false,
		            loop:true
		        }
		    }
		});
	});

	/*-------------------------------------------------*/
	/* =  categories ripple effect
	/*-------------------------------------------------*/
	var parent, ink, d, x, y;
	$(".main_category h3").click(function(e){
		parent = $(this).parent();
		//create .ink element if it doesn't exist
		if(parent.find(".ink").length == 0)
			parent.prepend("<span class='ink'></span>");
			
		ink = parent.find(".ink");
		//incase of quick double clicks stop the previous animation
		ink.removeClass("animate");
		
		//set size of .ink
		if(!ink.height() && !ink.width())
		{
			//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
			d = Math.max(parent.outerWidth(), parent.outerHeight());
			ink.css({height: d, width: d});
		}
		
		//get click coordinates
		//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
		x = e.pageX - parent.offset().left - ink.width()/2;
		y = e.pageY - parent.offset().top - ink.height()/2;
		
		//set the position and add class .animate
		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});

	/*-------------------------------------------------*/
	/* =  browse-link
	/*-------------------------------------------------*/

	$(window).on('load',function(){

		var toggles = document.querySelectorAll(".browse-link");

		  for (var i = toggles.length - 1; i >= 0; i--) {
		    var toggle = toggles[i];
		    toggleHandler(toggle);
		  };

		  function toggleHandler(toggle) {
		    toggle.addEventListener( "click", function(e) {
		      e.preventDefault();
		      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		    });
		}
	});

	/*-------------------------------------------------*/
	/* =  open-close browse categories
	/*-------------------------------------------------*/

	$(window).on('load',function(){
		var $openclose = $('#open-close');
		 

			$openclose.click(function () {
		     
			    $("#browse-categories").slideToggle('fast');
			      
			});

		 
	});

	/*-------------------------------------------------*/
	/* =  search
	/*-------------------------------------------------*/
  
    $(".search-box").first().expandSearch();


    	
    	/*-------------------------------------------------*/
	/* =  info modal popup
	/*-------------------------------------------------*/

	$(window).on('load',function(){
 	
 	var triggerBttn = document.getElementById( 'trigger-info-modal' ),
		overlay = document.querySelector( 'section.info-modal' ),
		closeBttn = overlay.querySelector( 'a.info-modal-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };
	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );

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
	/* =  article sticky
	/*-------------------------------------------------*/

	$('.post-content').theiaStickySidebar({
	      // Settings
	      additionalMarginTop: 0,

	});

	/*-------------------------------------------------*/
	/* =  back to top
	/*-------------------------------------------------*/

	$('.back-to-top').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
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

 







