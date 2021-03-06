<?php
return function($site, $pages, $page) {

  // fetch the projects
  $articles = page('issues')->grandChildren()->visible();
  $articlesSidebar = page('issues')->grandChildren()->visible();

  // fetch all tags used in projects. pluck($field, 'separator', unique)
  $tags = $articles->pluck('tags', ',', true);

  // add the tag filter if there is a tag in the url
	if($tag = param('tag')) {
	  	$articles = $articles->filterBy('tags', $tag, ',');
	}
  echo("<script>console.log('PHP: ".$articles."');</script>");
  echo("<script>console.log('PHP: ".$articlesSidebar."');</script>");

	// Return the list of projects and tags to template
    return compact('articles', 'articlesSidebar', 'tags', 'latestarticles');
};


?>