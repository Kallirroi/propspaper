

$(document).ready(function(){

	/*-------------------------------------------------*/
    //-------------------------Initialization -------------------------
	/*-------------------------------------------------*/
	$("section#draggable" ).draggable();



	/*-------------------------------------------------*/
	/* =  Make the width of the horizontal container adapt to the number of Issues
	/*-------------------------------------------------*/
	var issuesPublished = $('#indexSection').children().length;
	// (width of .post-item + 100 + 100)
	var currentWidth = $('#indexSection').find('.post-item').width();
	var indexSectionWidth = (currentWidth + currentWidth/5 + currentWidth/5)*issuesPublished;
	$('#indexSection').css('width', indexSectionWidth+'px');

	/*-------------------------------------------------*/
    //-------------------------PROPS FOR...... -------------------------
	/*-------------------------------------------------*/
	var query = window.location.href.split('tag:').slice(1).toString();
	var terms = query.replace(/%20/g, ' '); //have to replace %20 by a '   '

	if (terms.toString() === "") { //main page
		// $('.title').show();
		$('#searchTerms').css('opacity', 0);
	} 
	else { //search page
		$('#searchTerms').text(" for  "+terms);
		// $('.title').hide();
		$('#searchTerms').css('opacity', 1);
	}

	/*-------------------------------------------------*/
	//-------------------------Front/back hover effect-------------------------
	/*-------------------------------------------------*/

	$('.post-item').on('mouseover', function(e) {
		e.preventDefault();
		var hovered = e.target;
		var hoveredNumber = $(hovered).attr('alt');
		$(hovered).attr('src', $(hovered).data('hover'));
	}).mouseout(function (e) {
		e.preventDefault();
		var hovered = e.target;
	 	$(hovered).attr('src', $(hovered).data("src"));
	});

	/*-------------------------------------------------*/
	//-------------------------Skew TAGS-------------------------
	/*-------------------------------------------------*/

	$('.post-meta').on('mouseover', function(e) {	
		e.preventDefault();	
		var children = $('.post-meta ul li');
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX("+(Math.sin(e.pageY/(120 * (i+1)))) * 30+"deg)";
		}
	})
	.on('mouseout', function(e) {
		e.preventDefault();	
		var children = $('.post-meta ul li');
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX(0)";
		}		
	});



	/*-------------------------------------------------*/
    //-------------------------INDEX button -------------------------
	/*-------------------------------------------------*/
	$('#indexButton').on('click', function(e){
		e.preventDefault();
		$('#sidebar').css('width', '50vw');
		$('a.sidebarImages > img').css('width', $('#sidebar').width()/6);
		$('a.sidebarImages > span > img').css('width', $('#sidebar').width()/6);
	})


	/*-------------------------------------------------*/
	//-------------------------Sidebar responsiveness------------------
	/*-------------------------------------------------*/

	$('#split-bar').mousedown(function (e) {
	    e.preventDefault();
	    $(document).mousemove(function (e) {
	        e.preventDefault();
	        var x = window.innerWidth - e.pageX;
	        if (x > 15 && x < window.innerWidth/2) {  
	          	$('#sidebar').css("width", x);
				$('a.sidebarImages > img').css('width', x/6);
				$('a.sidebarImages > span > img').css('width', x/6);
	        }
	    })
	});

	$(document).mouseup(function (e) {
	    $(document).unbind('mousemove');
	});



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
	/* =  subscriber modal popup
	/*-------------------------------------------------*/
 	
	function showMailingPopUp() {
	    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"49fafba10129670d38e58ede8","lid":"2a6794e760"}) })
	    // debugger;
	    // document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	    document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
	};

	document.getElementById("open-popup")
	.addEventListener('click', function(event) {
	  showMailingPopUp();
	})


    /*-------------------------------------------------*/
	/* =  contributors modal popup
	/*-------------------------------------------------*/
 	
	$('#trigger-info-modal-contributors').on( 'click', function() {
		$('section.info-modal-contributors').show();
	});

	$('a.info-modal-close-contributors').on( 'click', function(){
		$('section.info-modal-contributors').hide();
	});

	/*-------------------------------------------------*/
	/* =  socials share
	/*-------------------------------------------------*/

	//var url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
	var url = window.location.href;
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

});

 







