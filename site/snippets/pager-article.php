<section>
	<nav role="navigation">
		<ul class="pagination">
			<li class="button <?php e(!$page->hasNextVisible(), ' disabled' ) ?>"><a class="next" href="<?php echo $page->hasNextVisible()? $page->nextVisible()->url(): '#' ?>">&lsaquo; <?php echo l::get('article.next') ?></a></li>
			<li class="button <?php e(!$page->hasPrevVisible(), ' disabled' ) ?>"><a class="prev" href="<?php echo $page->hasPrevVisible()? $page->prevVisible()->url(): '#' ?>"><?php echo l::get('article.prev') ?> &rsaquo;</a></li>
		</ul>
	</nav>  
</section>
