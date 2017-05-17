

	<?php echo js("assets/js/jquery.min.js") ?>
	<?php echo js("assets/js/underscore.js") ?>
	<?php echo js("assets/js/main.js") ?>
	<?php echo js("assets/js/jquery-ui/jquery-ui.js") ?>
	<?php echo js("assets/js/jquery.expand-search.min.js") ?>
	<?php echo js("assets/js/classie.js") ?>
	<?php echo js("assets/js/screensaver.js") ?>
	<?php echo js("assets/js/isotope.js") ?>
	<?php echo js("assets/js/modernizr.custom.js") ?>
	<?php echo js("assets/js/jquery-zoom/jquery.zoom.js") ?>
  	<?php snippet('analytics') ?>
	<?= js('assets/plugins/embed/js/embed.js') ?>
	
  	<!-- custom javascript -->
	<?php foreach($page->files()->filterBy('extension', 'js') as $js): ?>
	<?php echo js($js->url()) ?>
	<?php endforeach ?>
	
</body>
</html>
