<?php if(!defined('KIRBY')) exit ?>

title: Article
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  date:
    label: Date
    type: date
    width: 1/2
    default: now
  author:
    label: Author
    type: user
    width: 1/2
  text:
    label: Text
    type:  textarea
  tags:
    label: Tags
    type:  tags
