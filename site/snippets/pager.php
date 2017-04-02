
<?php if (isset($pagination)): ?>
<section>
	<nav role="navigation">
		<ul class="pagination">
			<?php if($pagination->hasPrevPage()): ?>
				<li class="button"><a class="prev" href="<?php echo $pagination->prevPageUrl() ?>">&lsaquo; <?php echo l::get('page.prev') ?></a></li>
			<?php endif ?>

			<?php if($pagination->hasNextPage()): ?>
				<li class="button"><a class="next" href="<?php echo $pagination->nextPageUrl() ?>"><?php echo l::get('page.next') ?> &rsaquo;</a></li>
			<?php endif ?>
		</ul>
	</nav>  
</section>
<?php endif ?>

