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
						<img src="<?php echo url('assets/img/logo-hover.svg') ?>" width="152" height="196" alt="<?php echo html($article->title()) ?>" />
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
				<?php echo kirbytext(str::short($article->text(), 50)); ?>
			</div>
			<?php endif ?>
	
               
<!-- 			<div class="post-meta">
				<ul>	 

					<li class="author"> <?php echo (relativeDate($article->date('Y-m-d'))) ?> <?php echo l::get('by') ?>
						
						<?php if ($article->author()): ?>
							<?php if ($article->author()->firstName() || $article->author()->lastName()): ?>
							<strong><?php echo $article->author()->firstName() ?> <?php echo $article->author()->lastName() ?></strong>
							<?php else: ?>
							<?php echo $article->author()->username() ?>
							<?php endif ?>
						<?php endif ?>
					</li>

				</ul>
			</div> -->
			 
		</footer>

	</article>
	<?php endforeach ?>
</section>