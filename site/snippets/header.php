
<!-- Header (logo/Browse button/Info/Search Input) -->
<header class="header">
	<div class="logo">
		<a href="<?php echo url() ?>">
			<img src="<?php echo url('assets/img/logo.svg') ?>" width="72" height="90" alt="<?php echo $site->title()->html() ?>" />
		</a>
	</div>

	<a href="#" id="open-close" class="browse-link">
		<span class="icon-tag"></span>
		<span class="icon-close"></span>
		<div class="cta"><?php echo l::get('browse.categories') ?></div>
	</a>

	<nav class="nav">
		<ul>
			<li><a href="#" id="trigger-info-modal"><span class="icon-info"></span></a> </li>		 
		</ul>
	</nav>

	
	<form class="search-box">
	<div class="btn-close"><span class="icon-close"></span></div>
	<input class="search-bar" type="text" value="" placeholder="Search" data-active-placeholder="Type to search..." name="s">
 	
	<p class="help">Press <strong>return</strong> to search. Press <strong>Esc</strong> to cancel.</p>
	</form>

</header>

<?php snippet('about') ?>