---
layout: layouts/blog.njk
title: News
date: 2021-07-26
permalink: "/news/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
pagination:
  data: collections.post
  size: 8
  alias: posts
  reverse: true
eleventyNavigation:
  key: News
  order: 2

---
