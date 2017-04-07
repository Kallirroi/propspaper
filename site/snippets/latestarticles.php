<!-- Latest articles -->
<section class="post-container">

	<?php foreach($articles as $article): ?>
		
	<article class="post-item grid-sizer">
		
		<header>
			<?php if($image = $article->images()->sortBy('sort', 'asc')->first()): ?>
			<div class="post-image">
				<img class="lazy-loaded" 
					data-src="<?php echo thumb($image, array('width' => 515))->url() ?>"  
					src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
					alt="<?php echo html($article->title()) ?>"
				/>
				<noscript>
					<img 
						src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
						alt="<?php echo html($article->title()) ?>"
					/>
				</noscript>
			</div>
			<?php endif ?>
			
			<a href="<?php echo $article->url() ?>">
				<div class="post-overlay">
					<div class="post-logo">
<!-- 						<img src="<?php echo url('assets/img/logo-hover.svg') ?>" width="152" height="196" alt="<?php echo html($article->title()) ?>" /> -->
						<noscript>
							<img 
								src="<?php echo url('assets/img/logo-hover.svg') ?>" 
								alt="<?php echo html($article->title()) ?>"
							/>
						</noscript>
					</div>
				</div>
			</a>
		</header>

		<footer>
			<h3><?php echo html($article->title()) ?></h3>

			<?php if (!$article->text()->empty()): ?>
			<div class="post-content">
				<!-- <?php echo kirbytext(str::short($article->text(), 50)); ?> -->
			</div>
			<?php endif ?>
	
               
 			<div class="post-meta">
 			<ul>
 				<li>
 					<?php if ($article->tags()): ?>
					<?php foreach(str::split($article->tags()) as $tag): ?> 
					    <a href="<?php echo url('issues/' . url::paramsToString(['tag' => $tag])) ?>">
					      <?php echo html($tag) ?>
					    </a>
					<?php endforeach ?>
				<?php endif ?>				
 				</li>
 			</ul>

			</div> 
			 
		</footer>

	</article>
	<?php endforeach ?>
	
</section>