<!-- Latest articlesSidebar -->
<div id="sidebar"> 
    <div id="split-bar">  
		<div class="verticalHandle"></div>
    </div>
	<?php foreach($articlesSidebar->sortBy('title', 'desc') as $article): ?>
		<?php if($image = $article->images()->filterBy('name', '*=', 'front')->sortBy('sort', 'asc')->first()): ?>
			<a class="sidebarImages" href="<?php echo $article->url() ?>">
				<img src="<?php echo thumb($image, array('width' => 515))->url() ?>" 
				alt="<?php echo html($article->title()) ?>" />
			</a>
		<?php endif ?>
	<?php endforeach ?>
</div>