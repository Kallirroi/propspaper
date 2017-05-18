
<!-- Header (logo/Browse button/Info/Search Input) -->
<header class="header">
	<a class="title" href="<?php echo url() ?>">PROPS </a> 
	<div id="searchTerms"></div> 
	<nav class="nav-alt">
		<a id="trigger-info-modal"> INFO </a>
		<a id="trigger-info-modal-contributors"> CONTRIBUTORS </a>
		<a id="indexButton">INDEX</a>
	</nav>
</header>

<?php snippet('about') ?>
<?php snippet('contributors') ?>