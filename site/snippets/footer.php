<footer class="footer">
</footer>
	<?php echo js("assets/js/jquery.min.js") ?>
	<?php echo js("assets/js/main.js") ?>
	<?php echo js("assets/js/jquery-ui/jquery-ui.js") ?>
	<?php echo js("assets/js/jquery.expand-search.min.js") ?>
	<?php echo js("assets/js/classie.js") ?>
	<?php echo js("assets/js/isotope.js") ?>
	<?php echo js("assets/js/modernizr.custom.js") ?>
  	<?php snippet('analytics') ?>

	<!-- custom javascript -->
	<?php foreach($page->files()->filterBy('extension', 'js') as $js): ?>
	<?php echo js($js->url()) ?>
	<?php endforeach ?>

  
</body>
</html>
