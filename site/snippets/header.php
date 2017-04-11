
<!-- Header (logo/Browse button/Info/Search Input) -->
<header class="header">

	<div class="logo">
		<a href="<?php echo url() ?>">
			<img src="<?php echo url('assets/img/logo.svg') ?>" width="auto" height="auto" alt="<?php echo $site->title()->html() ?>" />
		</a>
	</div>
	<div id="searchTerms"></div>
	<nav class="nav">
		<ul>
			<li><a href="#" id="trigger-info-modal">
				<img src="<?php echo url('assets/img/info.svg') ?>" alt="<?php echo $site->title()->html() ?>" />
				</a>
			</li> 
		</ul>
	</nav>

	<form class="search-box">
		<div class="btn-close"><span class="icon-close"></span></div>
		<input class="search-bar" type="text" value="" placeholder="Search" data-active-placeholder="Search..." name="s">
	</form>

	<div class="layout" id="randomLayout">
		layout
	</div>



</header>

<?php snippet('about') ?>