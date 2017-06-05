
<?php

	$about = $pages->find('about');


?>
<section id="draggable"  class="info-modal">
	<div class="info-modal-content">
		<a class="info-modal-close">close</a>
		<?php echo $about->text()->kirbytext() ?>
	</div>
</section>

