<!-- Latest articles -->
<section class="post-container"  id="columnSection">
		<?php foreach($articles as $article): ?>
			<article class="post-item grid-sizer">	
				<header>
					<?php if($image = $article->images()->sortBy('sort', 'asc')->first()): ?>
						<div class="post-image" >								
							<a href="<?php echo $article->url() ?>">
								<img id="mainPageImages<?php echo html($article->title()) ?>" class="lazy-loaded" 
								data-src="<?php echo thumb($image, array('width' => 515))->url() ?>"  
								data-hover="<?php echo thumb($article->images()->sortBy('sort', 'asc')->flip()->first(), array('width' => 515))->url() ?>" 
								src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
								alt="<?php echo html($article->title()) ?>"
									/>
							</a>
						</div>
					<?php endif ?>
				</header>

				<footer>
					<h3><?php echo html($article->title()) ?></h3>               
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


<!-- Latest articles -->
<!-- <section class="post-container" id="indexSection">
		<?php foreach($articles as $article): ?>
			<article class="post-item grid-sizer">	
				<header>
					<?php if($image = $article->images()->sortBy('sort', 'asc')->first()): ?>
						<div class="post-image" >								
							<a href="<?php echo $article->url() ?>">
								<img id="mainPageImages<?php echo html($article->title()) ?>" class="lazy-loaded" 
								data-src="<?php echo thumb($image, array('width' => 515))->url() ?>"  
								data-hover="<?php echo thumb($article->images()->sortBy('sort', 'asc')->flip()->first(), array('width' => 515))->url() ?>" 
								src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
								alt="<?php echo html($article->title()) ?>"
									/>
							</a>
						</div>
					<?php endif ?>
				</header>

				<footer>
					<h3><?php echo html($article->title()) ?></h3>               
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
</section> -->