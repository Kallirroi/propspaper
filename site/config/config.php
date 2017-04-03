<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'K2-PERSONAL-c7103b6085b181beedcaaaa4631d5e5a');

/*

---------------------------------------
Theme Configuration
---------------------------------------

*/

// c::set('articles.postPerPage', 5);
// c::set('category.postPerPage', 5);
// c::set('feed.postNumber', 10);
// c::set('disqus.shortname', 'your-disqus-shortname');
// c::set('google-analytics.tackingid', 'UA-XXXXXXXX-X');

c::set('aristotheme.widget', true);

c::set('languages', array(
  array(
    'code'    => 'en',
    'name'    => 'English',
    'default' => true,
    'locale'  => 'en_US',
    'url'     => '/',
  ),
  array(
    'code'    => 'de',
    'name'    => 'Deutsch',
    'locale'  => 'de_DE',
    'url'     => '/de',
  ),
));

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('relativedate.fuzzy', false);
c::set('relativedate.length', 1);
c::set('markdown.extra', true);

c::set('debug',false);
