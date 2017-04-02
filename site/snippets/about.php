<!-- Informartion (About Us) -->

<?php

	$about = $pages->find('about');


?>

<section class="info-modal info-modal-scale">
	<div class="info-modal-content">
		<a class="info-modal-close"><span class="icon-close"></span></a>
		<?php echo $about->text()->kirbytext() ?>
	</div>
</section>