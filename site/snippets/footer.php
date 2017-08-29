

	<?php echo js("assets/js/jquery.min.js") ?>
	<?php echo js("assets/js/underscore.js") ?>
	<?php echo js("assets/js/main.js") ?>
	<?php echo js("assets/js/jquery-ui/jquery-ui.js") ?>
	<?php echo js("assets/js/classie.js") ?>
	<?php echo js("assets/js/screensaver.js") ?>
	<?php echo js("assets/js/isotope.js") ?>
	<?php echo js("assets/js/modernizr.custom.js") ?>
	<?php echo js("assets/js/jquery-zoom/jquery.zoom.js") ?>
  	<?php echo analytics() ?>
	<?= js('assets/plugins/embed/js/embed.js') ?>
	<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
	
	
  	<!-- custom javascript -->
	<?php foreach($page->files()->filterBy('extension', 'js') as $js): ?>
	<?php echo js($js->url()) ?>
	<?php endforeach ?>
	
</body>
</html>
