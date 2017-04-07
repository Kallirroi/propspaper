<?php
class ArticlePage extends Page {

  public function author() {
    return (parent::author()->empty())? false : kirby()->site()->users()->find(parent::author());
  }

  public function issues() {
    return kirby()->site()->index()->filterBy('template', 'home')->first();
  }
 
}

 