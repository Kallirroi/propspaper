
<?php if (isset($pagination)): ?>
<section>
	<nav role="navigation">
		<ul class="pagination space-buttons">
			<?php if($pagination->hasPrevPage()): ?>
				<li class="button"><a class="prev" href="<?php echo $pagination->prevPageUrl() ?>">&lsaquo; <?php echo l::get('page.prev') ?></a></li>
			<?php else: ?>
			    	<li class="button disabled"><a class="prev" href="#">&lsaquo; <?php echo l::get('page.prev') ?></a></li>
			<?php endif ?>

			<?php foreach($pagination->range(10) as $r): ?>
				<li><a<?php if($pagination->page() == $r) echo ' class="current"' ?> href="<?php echo $pagination->pageURL($r) ?>"><?php echo $r ?><span>,</span></a></li>
			<?php endforeach ?>

			<?php if($pagination->hasNextPage()): ?>
				<li class="button"><a class="next" href="<?php echo $pagination->nextPageUrl() ?>"><?php echo l::get('page.next') ?> &rsaquo;</a></li>
			<?php else: ?>
				<li class="button disabled"><a class="next" href="#"><?php echo l::get('page.next') ?> &rsaquo;</a></li>
			<?php endif ?>
		</ul>
	</nav>  
</section>
<?php endif ?>


 