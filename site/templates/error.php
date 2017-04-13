
<?php snippet('head') ?>

<?php snippet('header') ?>

<section class="category-header">
	<h1><?php echo $page->title()->html() ?></h1>
</section>

<section class="post-wrapper" style="text-align:center">		
	<?php echo $page->text()->kirbytext() ?>
</section>

<?php snippet('footer') ?>