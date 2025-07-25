---
layout: default
title: "Blog"
permalink: /blog/
---
<br>

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
      
      {% if post.tags.size > 0 %}
        <div class="post-tags">
          {% for tag in post.tags %}
            <span class="post-tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search');
  const posts = document.querySelectorAll('.blog-post-item');
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    posts.forEach(post => {
      const title = post.querySelector('.post-title').textContent.toLowerCase();
      const excerpt = post.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
      const tags = Array.from(post.querySelectorAll('.post-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
      
      const matches = title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm);
      post.style.display = matches ? 'block' : 'none';
    });
  });
});
</script>