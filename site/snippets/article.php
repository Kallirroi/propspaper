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

		<div id="screensaver" data-duration-start="1000" data-duration-scroll="1500">
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
		</div>

		<div class="post-content" >

			<h1><?php echo $page->title()->html() ?></h1>
			
			<?php echo $page->text()->kirbytext() ?>

			<div class="post-meta">
<!--  				<div class="author"> 
					<?php foreach(str::split($page->tags()) as $tag): ?> 
					    <a href="<?php echo url('issues/' . url::paramsToString(['tag' => $tag])) ?>">
					      <?php echo html($tag) ?>
					    </a>
					<?php endforeach ?>
				</div>  -->

				<div class="socbtn">
					<span class="icon-socials share">
					<div class="popup">
						<a class="share--twitter" href="#" data-message="Read "><span class="icon-twitter"></span></a>
						<a class="share--facebook" href="#"><span class="icon-facebook"></span></a> 
					</div>
				</div>
			</div>
			 
		 
		</div>
</section>



 
		 