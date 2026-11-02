---
layout: default
title: "Blog"
permalink: /blog/
---

<h1 class="sr-only">Blog</h1>

<div class="blog-posts">
  {% for post in site.posts %}
    <article class="blog-post-item">
      <div class="post-header">
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <time class="post-date">{{ post.date | date: "%B %d, %Y" }}</time>
      </div>
      {% if post.excerpt %}
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
      {% endif %}
    </article>
  {% endfor %}
  <article class="blog-post-item">
    <div class="post-header">
      <h2 class="post-title">
        <a href="https://medium.com/@mfundo">Earlier articles on Medium</a>
      </h2>
      <span class="post-date">medium.com/@mfundo</span>
    </div>
    <p class="post-excerpt">Articles that I wrote before I started this blog.</p>
  </article>
</div>
