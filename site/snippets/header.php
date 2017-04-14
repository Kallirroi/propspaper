
<!-- Header (logo/Browse button/Info/Search Input) -->
<header class="header">

	<nav class="nav-alt">
		<a href="<?php echo url() ?>">PROPS</a>
		<a href="#" id="trigger-info-modal"> INFO </a>
		<a href="#">INDEX</a>
		<form class="nav-alt-search"> 
			<input class="search-bar" type="text" value="" placeholder="Search..." data-active-placeholder="" name="s">
		</form>

	</nav>
	
		<span id="searchTerms"></span>
	<div>
		<div class="imageView" id="imageView">
			IMAGES
		</div>
		<div class="tagView" id="tagView">
			TAGS
		</div>			
	</div>

</header>


<?php snippet('about') ?>