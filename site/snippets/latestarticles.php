<!-- Latest articles -->
<section class="post-container">

	<?php foreach($articles as $article): ?>
		
	<article class="post-item grid-sizer">
		
		<header>
			<?php if($image = $article->images()->sortBy('sort', 'asc')->first()): ?>
			<div class="post-image">
				<a href="<?php echo $article->url() ?>">
					<img class="lazy-loaded" 
						data-src="<?php echo thumb($image, array('width' => 515))->url() ?>"  
						data-hover="http://localhost:8888/props/thumbs/issues/issue-1/1/props_01_collection_collection_2-940x1356.jpg"  
						src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
						alt="<?php echo html($article->title()) ?>"
					/>
				</a>
			</div>
			<?php endif ?>

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