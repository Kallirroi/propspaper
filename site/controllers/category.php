<?php

return function($site, $pages, $page) {


  // get all category articles and add pagination
  $categoryArticles = $page->children()->visible()->sortBy('date', 'desc');

  // perform search
  if ($query = get('s')) {
    $categoryArticles = $categoryArticles->search($query, 'title|text')->visible();
    if($categoryArticles->count() < 1) {
      $categoryArticles = page('error')->children()->filterBy('template', 'article');
    }
  }
 
 
  // create a shortcut for pagination
  $categoryArticles = $categoryArticles->paginate(c::get('category.postPerPage', 6));
  $pagination = $categoryArticles->pagination();

  // pass $articles and $pagination to the template
  return compact('categoryArticles', 'pagination');

};