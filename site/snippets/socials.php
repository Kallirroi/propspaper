<nav class="socials">
	<ul>	
		<?php if($site->facebook() != ''): ?>
			<li><a href="<?php echo $site->facebook() ?>"><span class="icon-facebook"></span></a> </li>
		<?php endif ?>
		<?php if($site->linkedin() != ''): ?>
			<li><a href="<?php echo $site->linkedin() ?>"><span class="icon-linkedin"></span></a> </li>
		<?php endif ?>
		<?php if($site->instagram() != ''): ?>
			<li><a href="<?php echo $site->instagram() ?>"><span class="icon-instagram"></span></a> </li>
		<?php endif ?>
		<?php if($site->twitter() != ''): ?>
			<li><a href="<?php echo $site->twitter() ?>"><span class="icon-twitter"></span></a> </li>
		<?php endif ?>
		<?php if($site->googleplus() != ''): ?>
			<li><a href="<?php echo $site->googleplus() ?>"><span class="icon-googleplus"></span></a> </li>
		<?php endif ?>
		<?php if($site->vimeo() != ''): ?>
			<li><a href="<?php echo $site->vimeo() ?>"><span class="icon-vimeo"></span></a> </li>
		<?php endif ?>
		<?php if($site->pinterest() != ''): ?>
			<li><a href="<?php echo $site->pinterest() ?>"><span class="icon-pinterest"></span></a> </li>
		<?php endif ?>
		<?php if($site->youtube() != ''): ?>
			<li><a href="<?php echo $site->youtube() ?>"><span class="icon-youtube"></span></a> </li>
		<?php endif ?>
		
		 
	</ul>
</nav>