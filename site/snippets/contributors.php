<!-- Informartion (About Us) -->

<?php

	$contributors = $pages->find('contributors');


?>
<section id="draggable"  class="info-modal-contributors">
	<div class="info-modal-content-contributors">
		<a class="info-modal-close-contributors">close</a>
		<?php echo $contributors->text()->kirbytext() ?>
	</div>
</section>

