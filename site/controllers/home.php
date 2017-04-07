<?php

return function($site, $pages, $page) {

  // get all articles and add pagination
  $articles = page('issues')->grandChildren()->visible();

  // perform search
  if ($query = get('s')) {
    $articles = $articles->search($query, 'title|text')->visible();
    if($articles->count() < 1) {
      $articles = page('error')->children()->filterBy('template', 'article');
    }
  }
 
  // create a shortcut for pagination
  $articles = $articles->paginate(c::get('articles.postPerPage', 15));
  $pagination = $articles->pagination();


  // fetch all tags used in projects. pluck($field, 'separator', unique)
  $tags = $articles->pluck('tags', ',', true);

  if($tag = param('tag')) {
      $articles = $articles->filterBy('tags', $tag, ',');
  }

  // pass $articles and $pagination to the template
  return compact('articles', 'pagination', 'tags');

};

 



 