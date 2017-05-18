

$(document).ready(function(){

	/*-------------------------------------------------*/
    //-------------------------Initialization -------------------------
	/*-------------------------------------------------*/
	$("#draggable" ).draggable();

	var issuesPublished = $('#indexSection').children().length;
	var indexSectionWidth = 400/11*issuesPublished;
	$('#indexSection').css('width', indexSectionWidth+'%');

	/*-------------------------------------------------*/
    //-------------------------PROPS FOR...... -------------------------
	/*-------------------------------------------------*/
	var query = window.location.href.split('tag:').slice(1).toString();
	
	var terms = query.replace(/%20/g, ' '); //have to replace %20 by a '   '

	if (terms.toString() === "") { //main page
		$('.title').show();
		$('#searchTerms').css('opacity', 0);
	} 
	else { //search page
		$('#searchTerms').text("PROPS for  "+terms);
		$('.title').hide();
		$('#searchTerms').css('opacity', 1);
	}

	/*-------------------------------------------------*/
	//-------------------------show back/front image-------------------------
	/*-------------------------------------------------*/

	$('.post-item').on('mouseover', function(e) {
		var hovered = e.target;
		var hoveredNumber = $(hovered).attr('alt');
		$(hovered).attr('src', $(hovered).data('hover'));
	}).mouseout(function (e) {
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
		var children = $('.post-meta ul li');
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].style.transform = "skewX(0)";
		}		
	});


	/*-------------------------------------------------*/
	//-------------------------Sidebar-------------------------
	/*-------------------------------------------------*/

	var min = 100;
	var max = window.innerWidth;
	var mainmin = 1000;
	var currentSidebar = $('#sidebar').width();
	var currentMain = $('#main').width();
	$('#split-bar').mousedown(function (e) {
	    e.preventDefault();
	    $(document).mousemove(function (e) {
	        e.preventDefault();
	        var x = window.innerWidth - e.pageX;
	        if (x > min && x < max && x < (300)) {  
	          $('#sidebar').css("width", x);
	          $('#main').css("width", currentMain+x);
	        }
	    })
	});
	$(document).mouseup(function (e) {
	    $(document).unbind('mousemove');
	});


	// /*-------------------------------------------------*/
	// //-------------------------Load Fonts-------------------------
	// /*-------------------------------------------------*/
 //    (function() {
 //        var path = '//easy.myfonts.net/v2/js?sid=270903(font-family=Neue+Haas+Unica+Pro+Bold)&sid=270910(font-family=Neue+Haas+Unica+Pro+Medium)&sid=270912(font-family=Neue+Haas+Unica+Pro)&sid=270916(font-family=Neue+Haas+Unica+Pro+Ultra+Light)&key=6BGuzqFAWW',
 //            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
 //            trial = document.createElement('script');
 //        trial.type = 'text/javascript';
 //        trial.async = true;
 //        trial.src = protocol + path;
 //        var head = document.getElementsByTagName("head")[0];
 //        head.appendChild(trial);
 //    })();



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

 







