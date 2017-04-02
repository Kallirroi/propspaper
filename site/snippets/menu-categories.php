<!-- Categories Slider -->
<section id="browse-categories" class="hidden">
	<div class="owl-carousel">
		 
		<?php foreach(page('topics')->children()->visible() as $category): ?>

			<div class="main_category">
				<div class="overlay">
					<?php if($image = $category->images()->sortBy('sort', 'asc')->first()): ?>
						<img class="lazy-loaded" 
							data-src="<?php echo thumb($image, array('width' => 300, 'height' => 300, 'crop' => true))->url() ?>"  
							src="<?php echo thumb($image, array('width' => 300, 'height' => 300, 'crop' => true))->url() ?>" 
							alt="<?php echo html($category->title()) ?>"
						/>
						<noscript>
							<img 
								src="<?php echo thumb($image, array('width' => 300, 'height' => 300, 'crop' => true))->url() ?>" 
								alt="<?php echo html($category->title()) ?>"
							/>
						</noscript>
					<?php endif ?>
					 
				</div>
				<a href="<?php echo $category->url() ?>">
					<div class="title">
						<h3><?php echo html($category->title()) ?></h3>
					</div>
				</a>
			</div>
		<?php endforeach ?>

	</div>
</section>
