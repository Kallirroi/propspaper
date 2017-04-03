<?php

return function($site, $pages, $page) {

  // get all articles and add pagination
  $articles = page('topics')->grandChildren()->visible()->sortBy('date', 'desc');

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

  // pass $articles and $pagination to the template
  return compact('articles', 'pagination');

};

 



 