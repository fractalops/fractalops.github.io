# mfundo.cloud ☁️

A personal engineering blog focused on cloud infrastructure, system engineering, and software development insights.

**🌐 Live Site:** available at [mfundo.cloud](https://mfundo.cloud)



---

## 🚀 Quick Start

1. **Clone this repo**
2. **Install Ruby & Bundler** (if not already):
   ```bash
   gem install bundler
   ```
3. **Install dependencies:**
   ```bash
   bundle install
   ```
4. **Preview locally:**
   ```bash
   ./scripts/serve.sh
   ```
5. **Create a new post:**
   ```bash
   ./scripts/new-post.sh "Your Post Title"
   ```

---

## 📝 Writing Posts (For Content Writers)

**Easy way to create posts:**
```bash
./scripts/new-post.sh "Tax-Free Savings Guide"
```
This creates a new file with the correct format and template.

**Manual method:**
- Add new posts to the `_posts/` directory using the format: `YYYY-MM-DD-title.md`
- Copy the template from `CONTENT_GUIDE.md`
- Images go in `assets/images/` and reference as `/assets/images/your-image.jpg`

**📖 Read `CONTENT_GUIDE.md` for detailed writing instructions**

---

## 🌐 Custom Domain

> TODO: If you have a custom domain, add it to the `CNAME` file and configure your DNS.

1. Create a `CNAME` file with your domain name (e.g., `myname.com`).
2. Update your DNS to point to GitHub Pages. See [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).
3. Enable HTTPS in your repo settings.

---

## 🛠️ Local Preview

To preview your site locally with live reload:
```bash
./scripts/serve.sh
```

---

## ☁️ Deploy to GitHub Pages

1. Initialize git and push to your repo:
   ```bash
   git init && git add . && git commit -m "Initial blog scaffold"
   git remote add origin git@github.com:<username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
2. GitHub Pages will auto-build from the `main` branch.
3. Visit `https://<username>.github.io` (or your custom domain) to see your blog live!

---

## 🔗 Resources

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Jekyll Themes](https://pages.github.com/themes/)

---

## For Content Writers

**Essential files to know:**
- `CONTENT_GUIDE.md` - Complete writing guide with templates and best practices
- `_posts/` - Where all blog posts live
- `assets/images/` - Where to put images for posts

**Creating content:**
1. Use `./scripts/new-post.sh "Post Title"` to create new posts
2. Follow the template and guidelines in `CONTENT_GUIDE.md`
3. Focus on engineering topics: cloud infrastructure, system design, software development
4. Include practical examples and real-world solutions

---
