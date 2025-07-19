---
layout: default
title: "Browse by Tags"
permalink: /tags/
---

# Browse Posts by Tags

Find financial education content by topic. Click any tag to see related posts.

<div class="tags-cloud">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <a href="#{{ tag[0] | slugify }}" class="tag-link" data-tag="{{ tag[0] | slugify }}">
      {{ tag[0] }} <span class="tag-count">({{ tag[1] | size }})</span>
    </a>
  {% endfor %}
</div>

<div class="tag-sections">
  {% for tag in tags %}
    <section class="tag-section" id="{{ tag[0] | slugify }}" data-tag="{{ tag[0] | slugify }}">
      <h2>{{ tag[0] | capitalize }}</h2>
      <div class="posts-grid">
        {% for post in tag[1] %}
          <article class="post-card">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
            {% if post.excerpt %}
              <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            {% endif %}
            <div class="post-tags">
              {% for post_tag in post.tags %}
                <span class="tag">{{ post_tag }}</span>
              {% endfor %}
            </div>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>

<script>
// Tag filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const tagLinks = document.querySelectorAll('.tag-link');
  const tagSections = document.querySelectorAll('.tag-section');
  
  // Show all sections by default
  function showAllSections() {
    tagSections.forEach(section => {
      section.style.display = 'block';
    });
  }
  
  // Show specific tag section
  function showTagSection(tagName) {
    tagSections.forEach(section => {
      if (section.dataset.tag === tagName) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        section.style.display = 'none';
      }
    });
  }
  
  // Add click handlers to tag links
  tagLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tagName = this.dataset.tag;
      
      // Update active state
      tagLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Show relevant section
      if (tagName) {
        showTagSection(tagName);
      } else {
        showAllSections();
      }
    });
  });
  
  // Handle direct links to tags
  if (window.location.hash) {
    const tagName = window.location.hash.substring(1);
    const targetLink = document.querySelector(`[data-tag="${tagName}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }
});
</script>