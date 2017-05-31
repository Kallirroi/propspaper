<div id="sidebar"> 
	
    <div id="split-bar">  
		<div class="verticalHandle"></div>
    </div>
	<?php foreach($articles->sortBy('title', 'desc') as $article): ?>
		<?php if($image = $article->images()->filterBy('name', '*=', 'props')->sortBy('sort', 'asc')->first()): ?>
			<a class="sidebarImages" href="<?php echo $article->url() ?>">
				<img src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
				alt="<?php echo html($article->title()) ?>" />
			</a>
		<?php endif ?>
	<?php endforeach ?>
</div>
<section class="post-wrapper">
		<div class="post-media">
			<?php foreach($page->images()->filterBy('name', '*=', 'props')->sortBy('sort', 'asc') as $image): ?>
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
		<div id="screensaver" data-duration-start="3000" data-duration-scroll="4000">
				<?php foreach($page->images()->filterBy('name', '*=', 'fragment') as $image): ?>
					<div class="item" style="background-image: url(<?php echo thumb($image)->url()?>) "></div>
				<?php endforeach ?>
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



 
		 