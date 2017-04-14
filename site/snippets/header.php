
<!-- Header (logo/Browse button/Info/Search Input) -->
<header class="header">

	<nav class="nav-alt">
		<a href="<?php echo url() ?>">PROPS</a>
		<a href="#" id="trigger-info-modal"> INFO </a>
		<a href="#">INDEX</a>
		<a class="imageView" id="imageView"> IMAGES </a>
		<a  class="tagView" id="tagView"> TAGS </a>	
		<form class="nav-alt-search"> 
			<input class="search-bar" type="text" value="" placeholder="Search..." data-active-placeholder="" name="s">
		</form>		
	</nav>

	<div id="searchTerms"></div>


</header>

<?php snippet('about') ?>