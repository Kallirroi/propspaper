<section class="post-wrapper">

		<div class="post-media">
			<?php foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
			<figure>
				<img class="lazy-loaded" 
					data-src="<?php echo thumb($image, array('width' => 940))->url() ?>"  
					src="<?php echo thumb($image, array('width' => 940))->url() ?>" 
					alt="<?php echo html($page->title()) ?>"
				/>
				<noscript>
					<img 
						src="<?php echo thumb($image, array('width' => 940))->url() ?>" 
						alt="<?php echo html($page->title()) ?>"
					/>
				</noscript>
			</figure>
			<?php endforeach ?>
		</div>

		<div class="post-content">

			<h1><?php echo $page->title()->html() ?></h1>
			
			<?php echo $page->text()->kirbytext() ?>

			<div class="post-meta">
<!-- 				<div class="author"> <?php echo (relativeDate($page->date('Y-m-d'))) ?> <?php echo l::get('by') ?>
					<?php if ($page->author()): ?>
						<?php if ($page->author()->firstName() || $page->author()->lastName()): ?>
						<strong><?php echo $page->author()->firstName() ?> <?php echo $page->author()->lastName() ?></strong>
						<?php else: ?>
						<?php echo $page->author()->username() ?>
						<?php endif ?>
					<?php endif ?>
				</div> -->
				<div class="socbtn">
					<span class="icon-socials share">
					<div class="popup">
						<a class="share--googleplus" href="#"><span class="icon-googleplus"></span></a>
						<a class="share--twitter" href="#" data-message="Hey! This is awesome, you should read this: "><span class="icon-twitter"></span></a>
						<a class="share--facebook"href="#"><span class="icon-facebook"></span></a> 
					</div>
				</div>
			</div>
			 
		 
		</div>
</section>
 
		 