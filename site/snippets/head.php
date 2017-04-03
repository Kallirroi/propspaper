<!DOCTYPE html>
<html lang="<?php echo $site->language()->code() ?>">
<head>

  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">

  <?php snippet('opengraph') ?>

  <!-- Alternate languages url for SEO -->
  <?php foreach ($site->languages() as $language): ?>
    <?php if ($site->language() != $language): ?>
      <link rel="alternate" hreflang="<?php echo $language->code() ?>" href="<?php echo $page->url($language->code()) ?>" />
    <?php endif ?>
  <?php endforeach ?>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
  <script src="https://d3js.org/d3.v4.min.js"></script>
  
  <!-- custom javascript -->
  <?php foreach($page->files()->filterBy('extension', 'js') as $js): ?>
  <?php echo js($js->url()) ?>
  <?php endforeach ?>
  
  <?php echo css('assets/css/main.css') ?>
  <?php echo css('@auto') ?>
  <?php echo js("assets/js/modernizr.custom.js") ?>
</head>
<body>



