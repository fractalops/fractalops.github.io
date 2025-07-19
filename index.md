---
layout: default
title: "mfundo.cloud"
---

# Welcome to mfundo.cloud ☁️

**Engineering insights from the cloud**

Sharing practical knowledge and experiences from cloud infrastructure, system engineering, and software development. Real-world solutions to complex technical challenges.

## What You'll Find Here

**☁️ Cloud Infrastructure**
- AWS, Azure, GCP patterns and architectures
- Cost optimization strategies
- Infrastructure as Code best practices

**⚙️ System Engineering**
- Scalability and performance optimization
- Reliability engineering principles
- Monitoring and observability

**💻 Software Engineering**
- Distributed systems design
- Development practices and patterns
- Architecture decisions and trade-offs

**🔧 DevOps & SRE**
- CI/CD pipeline optimization
- Automation and tooling
- Incident response and post-mortems

---

## Latest Posts

<div class="post-list">
{% for post in site.posts %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
    {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </article>
{% endfor %}
</div>

*Building reliable systems, one post at a time.* 