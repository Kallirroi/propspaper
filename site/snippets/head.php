<!DOCTYPE html>
<html lang="<?php echo $site->language()->code() ?>">
<head>

  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">

  <link rel="icon" href="https://raw.githubusercontent.com/Kallirroi/propspaper/master/favicon.png" type="image/png">


  <?php snippet('opengraph') ?>

  <!-- Alternate languages url for SEO -->
  <?php foreach ($site->languages() as $language): ?>
    <?php if ($site->language() != $language): ?>
      <link rel="alternate" hreflang="<?php echo $language->code() ?>" href="<?php echo $page->url($language->code()) ?>" />
    <?php endif ?>
  <?php endforeach ?>


  <?php echo css('@auto') ?>
  <?php 
  echo css('assets/css/main.css'); 
  echo css('assets/css/mobile.css', 'only screen and (max-width: 847px)');
  ?> 
  <?php echo css('assets/js/jquery-ui/jquery-ui.css') ?> 
  <?= css('assets/plugins/embed/css/embed.css') ?>
  <?php foreach($page->files()->filterBy('extension', 'css') as $css): ?>
  <?php echo css($css->url()) ?>
  <?php endforeach ?>  
  
</head>
<body>
