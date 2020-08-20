---
layout: layouts/blog.njk
title: Blog
date: 2020-08-08
permalink: "/blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
pagination:
  data: collections.post
  size: 8
  alias: posts
  reverse: true
eleventyNavigation:
  key: Blog
  order: 2

---
